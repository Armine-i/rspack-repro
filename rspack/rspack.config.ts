import { defineConfig } from '@rspack/cli';
import type { Configuration } from '@rspack/core';
import * as path from 'path';
import { BogusPlugin } from './util';

const config: Configuration = defineConfig({
  entry: {
    main: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    // Path aliases matching tsconfig.json
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: ['builtin:lightningcss-loader'],
        type: 'css',
      },
    ],
  },
  infrastructureLogging: {
    level: 'verbose',
    debug: /webpack\.cache/,
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  cache: true,
  experiments: {
    css: true,
    cache: {
      type: 'persistent',
      buildDependencies: ['./rspack'],
      // specify location so we can clear it
      storage: {
        type: 'filesystem',
        directory: 'node_modules/.rspack',
      },
    },
  },
});

export default config;
