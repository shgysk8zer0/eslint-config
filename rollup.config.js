import nodeResolve from '@rollup/plugin-node-resolve';

const modules = ['browser', 'config', 'globals', 'languageOptions', 'node', 'rules'];
const plugins = [nodeResolve()];
const external = ['globals', '@eslint/compat', '@eslint/js'];

export default modules.map(module => ({
	input: `${module}.js`,
	plugins,
	external,
	output: {
		file: `${module}.cjs`,
		format: 'cjs',
	}
}));
