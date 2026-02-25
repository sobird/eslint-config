export function genESLintConfig(
  mainConfig: string,
  additionalConfigs?: string[],
): string {
  return `
import { sobird } from 'eslint-config-sobird'

export default sobird({
${mainConfig}
}${additionalConfigs?.map(config => `,{\n${config}\n}`)})
`.trimStart();
}
