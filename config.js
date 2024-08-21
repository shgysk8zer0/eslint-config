import nodeConfig from './node.js';
import browserConfig from './browser.js';
import { ignoreFile } from './ignoreFile.js';

export { rules } from './rules.js';
export * as globals from './globals.js';
export * as languageOptions from './languageOptions.js';
export const node = config => [ignoreFile, nodeConfig(config)];
export const browser = config => [ignoreFile, browserConfig(config)];
export { ignoreFile, nodeConfig, browserConfig };
