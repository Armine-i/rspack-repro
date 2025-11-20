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
rspack-repro/
├── src/
│   ├── components/
│   │   └── HelloWorld.tsx    # Uses @utils/* alias
│   ├── utils/
│   │   └── greeting.ts       # Utility functions
│   ├── App.tsx               # Uses @components/* alias
│   └── index.tsx             # Uses @/* alias
├── rspack/
│   ├── rspack.config.ts      # TypeScript Rspack config
│   └── util.ts               # Rspack utilities
├── public/
│   └── index.html
├── tsconfig.json             # With path aliases
├── tsconfig.node.json
├── .gitignore
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

The persistent cache is configured in `rspack/rspack.config.ts` with profile logging and verbose infrastructure logging enabled. To see warnings about TypeScript paths:

1. Run the first build:
   ```bash
   npm run build
   ```

2. Look for the following warning in the console output:
   ```
   LOG from rspack.persistentCache
   <w> BuildDependencies: can't resolve ./util in /Users/airadian/rspack-repro/rspack.
   <w> - NotFound("./util")
   ```

## TypeScript Path Aliases

This project uses three path aliases defined in both `tsconfig.json` and `rspack/rspack.config.ts`:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@utils/*` → `src/utils/*`

These aliases are used throughout the codebase:
- `src/index.tsx` imports from `@/App`
- `src/App.tsx` imports from `@components/HelloWorld`
- `src/components/HelloWorld.tsx` imports from `@utils/greeting`

## Cache Location

The persistent cache is stored in `node_modules/.rspack` directory at the project root.
