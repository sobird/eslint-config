import { Command } from 'commander';

import { name, version } from '../../package.json';

const program = new Command(name)

  // .name(name)
  .description('Run the initialization or migration');

program.exitOverride();

program
  .option('-y, --yes', 'Skip prompts and use default values', false)
  .option('-t, --template <template...>', 'Use the framework template for optimal customization: vue / react')
  .option('-e, --extra <extra...>', 'Use the extra utils: formatter / perfectionist / unocss')
  .version(version)
  .action(async (args) => {
    console.log('args', args);
  });

try {
  await program.parseAsync(process.argv);
} catch (error) {
  //
}
