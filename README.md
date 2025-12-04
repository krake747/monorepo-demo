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

