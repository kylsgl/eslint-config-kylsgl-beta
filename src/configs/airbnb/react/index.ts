import { type Linter } from 'eslint';

import reactConfig from './react';
import reactA11yConfig from './react-a11y';
import reactHooksConfig from './react-hooks';

export const airbnbReactConfig: Linter.Config[] = [
	reactConfig,
	reactHooksConfig,
	reactA11yConfig,
];
