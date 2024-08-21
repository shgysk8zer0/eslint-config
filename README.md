# eslint-config

A shared ESLint config

[![CodeQL](https://github.com/shgysk8zer0/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/eslint-config/actions/workflows/codeql-analysis.yml)
![Node CI](https://github.com/shgysk8zer0/eslint-config/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://github.com/shgysk8zer0/eslint-config/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/eslint-config.svg)](https://github.com/shgysk8zer0/eslint-config/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/eslint-config.svg)](https://github.com/shgysk8zer0/eslint-config/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/eslint-config?logo=github)](https://github.com/shgysk8zer0/eslint-config/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/@shgysk8zer0/eslint-config)](https://www.npmjs.com/package/@shgysk8zer0/eslint-config)
![node-current](https://img.shields.io/node/v/@shgysk8zer0/eslint-config)
![npm bundle size gzipped](https://img.shields.io/bundlephobia/minzip/@shgysk8zer0/eslint-config)
[![npm](https://img.shields.io/npm/dw/@shgysk8zer0/eslint-config?logo=npm)](https://www.npmjs.com/package/@shgysk8zer0/eslint-config)

[![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)](https://github.com/shgysk8zer0)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/eslint-config.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/eslint-config.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
<!-- - [Security Policy](./.github/SECURITY.md) -->

## Purpose

This package is just to make configuring ESLint easier by providing preset configs for node & browser.
It also automatically ignores files listed in `.gitignore`.

## Example

```js
import { node } from '@shgysk8zer0/eslint-config';

export default node();
```

## Advanced example

```js
import { rules } from '@shgyk8zer0/eslint-config/rules.js';
import { ignoreFile } from '@shgysk8zer0/eslint-config/ignoreFile.js';
import { languageOptions } from '@shgysk8zer0/eslint-config/languageOptions.js';

export default [
  ignoreFile,
  { rules, languageOptions }
];
```
