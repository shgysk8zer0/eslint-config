import { browser as languageOptions} from './languageOptions.js';
import { rules } from './rules.js';

export default ({ ...config } = {}) => ({ rules, languageOptions, ...config });
