import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'web-components',
	plugins: [
		sass()
	],
	globalStyle: 'src/style/index.scss',
	outputTargets: [{
		type: 'dist'
	}, {
		type: 'docs'
	}, {
		type: 'www',
		serviceWorker: null
	}]
};

export const devServer = {
	root: 'www'
};
