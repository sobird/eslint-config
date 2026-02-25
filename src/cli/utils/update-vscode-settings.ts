import fs from 'node:fs/promises';
import path from 'node:path';

import { log } from '@clack/prompts';
import chalk from 'chalk';
import { modify, applyEdits } from 'jsonc-parser';

import { vscodeSettings } from '../constants';

import type { Options } from '../index';

export async function updateVscodeSettings(options: Options): Promise<void> {
  if (!options.updateVscodeSettings) {
    return;
  }

  const cwd = process.cwd();
  const dotVscodePath = path.join(cwd, '.vscode');
  const settingsPath = path.join(dotVscodePath, 'settings.json');
  await fs.mkdir(dotVscodePath, { recursive: true });

  let content = '{}';
  let isNewFile = true;
  try {
    content = await fs.readFile(settingsPath, 'utf8');
    isNewFile = false;
  } catch {
    //
  }

  let updatedText = content;
  for (const [key, value] of Object.entries(vscodeSettings)) {
    const edits = modify(updatedText, [key], value, {
      formattingOptions: { insertSpaces: true, tabSize: 2 },
    });
    updatedText = applyEdits(updatedText, edits);
  }

  await fs.writeFile(settingsPath, updatedText, 'utf-8');
  log.success(chalk.green(isNewFile ? 'Created .vscode/settings.json' : 'Updated .vscode/settings.json'));
}
