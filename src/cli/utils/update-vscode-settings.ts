import fs from 'node:fs/promises';
import path from 'node:path';

import { log } from '@clack/prompts';
import chalk from 'chalk';
import { parse, modify, applyEdits } from 'jsonc-parser';

import { vscodeSettingsString } from '../constants';

import type { Options } from '../index';

export async function updateVscodeSettings(options: Options): Promise<void> {
  if (!options.updateVscodeSettings) {
    return;
  }

  const cwd = process.cwd();
  const dotVscodePath = path.join(cwd, '.vscode');
  const settingsPath = path.join(dotVscodePath, 'settings.json');
  await fs.mkdir(dotVscodePath, { recursive: true });

  // 这会自动忽略 vscodeSettingsString 里的注释，将其转为纯 JS 对象
  const newSettings = parse(`{${vscodeSettingsString}}`);

  let content = '{}';
  try {
    content = await fs.readFile(settingsPath, 'utf8');
  } catch {
    //
  }

  let updatedText = content;
  for (const [key, value] of Object.entries(newSettings)) {
    const edits = modify(updatedText, [key], value, {
      formattingOptions: { insertSpaces: true, tabSize: 2 },
    });
    updatedText = applyEdits(updatedText, edits);
  }

  await fs.writeFile(settingsPath, updatedText, 'utf-8');

  log.success(chalk.green`Updated .vscode/settings.json`);
}
