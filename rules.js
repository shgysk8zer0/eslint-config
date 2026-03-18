import js from '@eslint/js';

export const rules =  {
	...js.configs.recommended.rules,
	'indent': [2, 'tab', { 'SwitchCase': 1, 'ignoredNodes': ['TaggedTemplateExpression'] }],
	'quotes': [2, 'single'],
	'semi': [2, 'always'],
	'no-console': 0,
	'no-async-promise-executor': 0,
	'no-prototype-builtins': 0,
	'no-unused-vars': 'error',
	'no-irregular-whitespace': ['error', {
		skipStrings: false,
		skipComments: false,
		skipRegExps: false,
		skipTemplates: false
	}],
	'no-control-regex': 'error',
	/* eslint-disable no-restricted-syntax, no-control-regex */
	'no-restricted-syntax': [
		'error',
		{
			// Blocks Bidi, Zero-Width, Invisible Ops, and Hangul Fillers
			selector: `
				[value=/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\u3164\uFFA0\u115F\u1160]/],
				Identifier[name=/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\u3164\uFFA0\u115F\u1160]/]
			`.replace(/\s+/g, ''),
			message: 'Security Risk: Invisible or Bidi Unicode characters detected.'
		},
		{
			// Blocks C0 and C1 control characters (except tab/newline)
			selector: '[value=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/]',
			message: 'Security Risk: Non-printing control characters detected.'
		},
		{
			// Prevents spoofing variable names with tabs
			selector: 'Identifier[name=/\t/]',
			message: 'Variable names cannot contain tabs.'
		}
	],
};
