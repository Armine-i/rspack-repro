# Rspack TypeScript Demo with Persistent Cache

This project demonstrates Rspack with TypeScript configuration and persistent cache, highlighting warnings related to TypeScript path aliases.

## Features

- Full TypeScript setup (including rspack.config.ts)
- React 18 with TypeScript
- TypeScript path aliases (`@/*`, `@components/*`, `@utils/*`)
- Rspack persistent cache enabled
- Simple Hello World app with live clock

## Project Structure

```
rspack-ts-demo/
├── src/
│   ├── components/
│   │   └── HelloWorld.tsx    # Uses @utils/* alias
│   ├── utils/
│   │   └── greeting.ts       # Utility functions
│   ├── App.tsx               # Uses @components/* alias
│   └── index.tsx             # Uses @/* alias
├── public/
│   └── index.html
├── rspack.config.ts          # TypeScript config
├── tsconfig.json             # With path aliases
├── tsconfig.node.json
└── package.json
```

## Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Clean build (removes cache and dist)
npm run build:clean
```

## Observing Persistent Cache Warnings

The persistent cache is configured in `rspack.config.ts:53-65` with profile logging and verbose infrastructure logging enabled. To see warnings about TypeScript paths:

1. Run the first build:
   ```bash
   npm run build
   ```

2. Run a second build (using cache):
   ```bash
   npm run build
   ```

3. Look for warnings in the console output related to TypeScript path resolution and the persistent cache mechanism.

The warnings typically appear when the persistent cache tries to resolve modules using TypeScript path aliases defined in `tsconfig.json`.

## TypeScript Path Aliases

This project uses three path aliases defined in both `tsconfig.json` and `rspack.config.ts`:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@utils/*` → `src/utils/*`

These aliases are used throughout the codebase:
- `src/index.tsx` imports from `@/App`
- `src/App.tsx` imports from `@components/HelloWorld`
- `src/components/HelloWorld.tsx` imports from `@utils/greeting`

## Cache Location

The persistent cache is stored in `.rspack_cache/` directory at the project root.
