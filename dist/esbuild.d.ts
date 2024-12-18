import * as esbuild from 'esbuild';
import { Options } from './types.js';
import '@antfu/utils';
import '@rollup/pluginutils';
import 'unplugin';

declare const _default: (options: Options) => esbuild.Plugin;

export { _default as default };
