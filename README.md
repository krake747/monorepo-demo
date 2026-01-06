# monorepo-demo

pnpm workspace monorepo demo

## Commands

Initialize a new pnpm workspace:

```bash
pnpm init
```

Create the necessary folders for a monorepo structure:

```bash
mkdir apps packages
```

- apps folder: Contains the main applications.
- packages folder: Contains shared libraries or components.

Create a `pnpm-workspace.yaml` file to define the workspace structure:

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

Create two sample applications in the `apps` folder:

```bash
// Astro app called curved-chaos
pnpm create astro@latest --add react
```

```bash
// Vite React app called linear-dream
pnpm create Vite
```

Add scripts to the root `package.json` to manage the workspace:

```json
{
  "scripts": {
    "dev": "pnpm --filter linear-dream dev",
    "dev:astro": "pnpm --filter curved-chaos dev"
  }
}
```

Create two new shared packages in the `packages` folder:

```bash
mkdir packages/core
cd packages/core
pnpm init
pnpm i -D typescript --filter core
pnpm exec tsc --init
pnpm install -D vitest --filter core
```

We add a simple utility function in `packages/core/src/math.ts` and a test to `packages/core/src/math.spec.ts`.

We add `tsconfig.json` for `packages/core` to add `"outDir": "dist"`.
We update the `package.json` with a build script and pointing to `"main": "dist/index.js"` and 
name the package `@mono/core`.

Afterwards we add the package to the `linear-dream` app:

```bash
pnpm add @mono/core --filter linear-dream --workspace
```

We now update the root `package.json` with extra scripts.

```json
"scripts": {
    "dev": "pnpm --filter linear-dream dev",
    "dev:astro": "pnpm --filter curved-chaos dev",
    "build": "pnpm build:packages && pnpm build:apps",
    "build:packages": "pnpm -r --filter ./packages/** build",
    "build:apps": "pnpm -r --filter ./apps/** build",
    "test:all": "pnpm -r test"
},
```

We do the same with a `package/ui` package that holds shared React components.

React requires some extra setup with `tsconfig.json` and dependencies to make React components.

Finally we add `@mono/ui` to both apps and use a shared button component in each app.

With this setup, you have a basic monorepo structure using pnpm workspaces, with shared packages
and applications that can leverage those packages. We can run development servers for each app,
build the packages and apps, and run tests across the entire monorepo.

## Turborepo

[Turborepo](https://turborepo.com/)

```bash
pnpm dlx create-turbo@latest // Creates a new turborepo
```

We need to run 

```bash
pnpm add turbo --save-dev --workspace-root
```
