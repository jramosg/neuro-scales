# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Deployment setup (GitHub Actions)

The workflow in `.github/workflows/deploy.yml` deploys to a VPS via SSH.

### Workflow triggers

- **Deploy depends on CI**: Deploy is triggered only when the `CI` workflow (`.github/workflows/ci.yml`) completes successfully on the `master` branch. The `validate` job in CI runs tests and quality checks; if both pass, deploy automatically runs.
- **Manual dispatch**: You can also manually trigger deploy via GitHub Actions UI, which bypasses CI checks.

Set these repository **Secrets** in GitHub:

- `VPS_HOST`: VPS hostname or IP
- `VPS_USER`: SSH username on the VPS
- `VPS_SSH_KEY`: private SSH key (PEM format)
- `VPS_SSH_PORT`: SSH port
- `APP_PORT`: external app port mapped in `docker-compose.prod.yml`

Optional repository **Variable**:

- `DEPLOY_ENVIRONMENT`: deployment environment name (defaults to `production`)

Optional repository **Environment**:

- Create an environment named `production` (or the value of `DEPLOY_ENVIRONMENT`) to add protection rules like required reviewers.
