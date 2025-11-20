import type { Compiler } from '@rspack/core';

export class BogusPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap('BogusPlugin', (stats) => {
      console.log('BogusPlugin: Build completed!');
    });
  }
}
