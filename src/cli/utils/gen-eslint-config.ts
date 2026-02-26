import { Project, QuoteKind } from 'ts-morph';

import { name } from '../../../package.json';

export async function genESLintConfig(
  filePath: string,
  mainConfig: string,
  additionalConfigs: string[] = [],
  interfaceName = 'sobird',
): Promise<void> {
  const project = new Project({
    manipulationSettings: {
      quoteKind: QuoteKind.Single, // 使用单引号
    },
  });

  const sourceFile = project.createSourceFile(filePath, '', { overwrite: true });
  sourceFile.addImportDeclaration({
    defaultImport: interfaceName,
    moduleSpecifier: name,
  });

  const args = [`{${mainConfig}}`];
  additionalConfigs.forEach((config) => {
    args.push(`{${config}}`);
  });

  sourceFile.addExportAssignment({
    isExportEquals: false,
    expression: `${interfaceName}(${args.join(',')})`,
  });

  sourceFile.formatText({
    indentSize: 2,
  });

  await project.save();
}
