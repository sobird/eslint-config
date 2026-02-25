import fs from 'node:fs';
import fsp from 'node:fs/promises';

import { log, note } from '@clack/prompts';
import { includeIgnoreFile } from '@eslint/compat';

import { genESLintConfig } from './gen-eslint-config';
import { updateESLintConfig } from './update-eslint-config';

import type { Mock } from 'vitest';

vi.mock('node:fs');
vi.mock('node:fs/promises');
vi.mock('@clack/prompts');
vi.mock('./gen-eslint-config');
vi.mock('@eslint/compat', () => ({
  includeIgnoreFile: vi.fn().mockReturnValue({ ignores: ['dist/'] }),
}));

describe('updateESLintConfig', () => {
  const mockResult = {
    extra: ['formatter'],
    frameworks: ['vue'],
  };

  beforeEach(() => {
    vi.clearAllMocks();

    // 默认模拟 cwd
    vi.spyOn(process, 'cwd').mockReturnValue('/test/project');

    // 默认模拟 package.json 存在
    (fsp.readFile as Mock).mockResolvedValue(JSON.stringify({ name: 'test', type: 'module' }));

    // 默认模拟 genESLintConfig 返回
    (genESLintConfig as Mock).mockImplementation((main: string) => `export default [${main}]`);

    // 默认模拟 readdir 为空
    (fsp.readdir as Mock).mockResolvedValue([]);
  });

  it('should create eslint.config.js for ESM project', async () => {
    (fs.existsSync as Mock).mockReturnValue(false); // 不存在 .eslintignore

    await updateESLintConfig(mockResult);

    expect(fsp.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('eslint.config.js'),
      expect.stringContaining('vue: true'),
    );
    expect(log.success).toHaveBeenCalled();
  });

  it('should create eslint.config.mjs for CommonJS project', async () => {
    // Arrange
    (fsp.readFile as Mock).mockResolvedValue(
      JSON.stringify({ name: 'test' }), // no type field
    );
    (fs.readdirSync as Mock).mockReturnValue([]);

    await updateESLintConfig(mockResult);

    // Assert
    expect(fsp.writeFile).toHaveBeenCalledWith(
      `${process.cwd()}/eslint.config.mjs`,
      expect.stringContaining('vue: true'),
    );
  });

  it('should migrate .eslintignore if it exists', async () => {
    (fs.existsSync as Mock).mockReturnValue(true);

    await updateESLintConfig(mockResult);

    // Assert
    expect(log.step).toHaveBeenCalledWith(expect.stringContaining('Migrating'));
    expect(includeIgnoreFile).toHaveBeenCalledWith(`${process.cwd()}/.eslintignore`);
    // 验证是否包含了来自 .eslintignore 的内容
    expect(genESLintConfig).toHaveBeenCalledWith(
      expect.stringContaining('ignores: ["dist/"]'),
      expect.any(Array),
    );
  });

  it('should handle empty ignores array from eslintignore', async () => {
    // Arrange
    (includeIgnoreFile as Mock).mockReturnValue({ ignores: undefined });

    // Act
    await updateESLintConfig({ extra: [], frameworks: [] });

    // Assert
    expect(genESLintConfig).toHaveBeenCalledWith('', []);
  });

  it('should add unocss option when selected', async () => {
    // Arrange
    const result = { extra: ['unocss'] as const, frameworks: [] };

    // Act
    await updateESLintConfig(result);

    // Assert
    expect(genESLintConfig).toHaveBeenCalledWith(
      expect.stringContaining('unocss: true'),
      [],
    );
  });

  it('should add framework options', async () => {
    // Arrange
    const result = { extra: [], frameworks: ['react', 'vue'] };

    // Act
    await updateESLintConfig(result);

    // Assert
    expect(genESLintConfig).toHaveBeenCalledWith(
      expect.stringContaining('react: true'),
      [],
    );
    expect(genESLintConfig).toHaveBeenCalledWith(
      expect.stringContaining('vue: true'),
      [],
    );
  });

  it('should detect legacy config files', async () => {
    (fsp.readdir as Mock).mockResolvedValue([
      '.eslintrc.js',
      '.eslintrc.json',
      '.prettierrc',
      'src',
      'package.json',
    ]);

    // Act
    await updateESLintConfig(mockResult);

    // Assert
    expect(note).toHaveBeenCalledWith(
      '.eslintrc.js, .eslintrc.json, .prettierrc',
      'You can now remove those files manually',
    );

    // 确保新生成的 flat config 不被列入遗留文件
    expect(note).not.toHaveBeenCalledWith(
      expect.stringContaining('eslint.config.js'),
      expect.any(String),
    );

    // 验证是否在最后扫描了旧文件
    expect(fsp.readdir).toHaveBeenCalled();
  });

  it('should not show legacy config note when no legacy files exist', async () => {
    // Arrange
    (fs.readdirSync as Mock).mockReturnValue(['package.json', 'src']);

    const result = { extra: [], frameworks: [] };

    // Act
    await updateESLintConfig(result);

    // Assert
    expect(note).not.toHaveBeenCalled();
  });

  it('should handle readFile errors gracefully', async () => {
    // Arrange
    (fsp.readFile as Mock).mockRejectedValue(new Error('Permission denied'));

    const result = { extra: [], frameworks: [] };

    // Act & Assert
    await expect(updateESLintConfig(result)).resolves.toBeUndefined();
  });
});
