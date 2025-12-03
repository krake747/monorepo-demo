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