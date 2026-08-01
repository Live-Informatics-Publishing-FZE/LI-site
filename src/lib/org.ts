// YAML читается как строка через Vite (?raw) — путь не зависит от сборки
import raw from '../content/singletons/organization.yml?raw';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');
export const org: any = yaml.load(raw);
