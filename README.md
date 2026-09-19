# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment

This project builds a static site with Vite and outputs the production files to the `dist/` folder.

Recommended deploy options:

- **Vercel (recommended)**
	- Quick: push your repo to GitHub/GitLab/Bitbucket then import the project in the Vercel dashboard. Set the framework to `Other` or `Vite`, build command: `npm run build`, and output directory: `dist`.
	- CLI: install `vercel` and run:
		```bash
		npm install -g vercel
		vercel --prod
		```

- **Netlify**
	- Quick: connect your Git repo in the Netlify dashboard and set build command `npm run build` and publish directory `dist`.
	- Or use the Netlify CLI after installing it:
		```bash
		npm install -g netlify-cli
		netlify deploy --prod --dir=dist
		```

Files added to help deploy:
- `netlify.toml` — Netlify build/publish settings and SPA redirect.
- `vercel.json` — Vercel static-build settings.

CI / Git workflow
- Push your code to a Git remote (e.g., GitHub):
	```bash
	git init
	git add .
	git commit -m "Initial T-Manova landing"
	git remote add origin <your-repo-url>
	git branch -M main
	git push -u origin main
	```

After pushing, import the repo into Vercel or Netlify and follow the dashboard prompts — both services will run the build and publish `dist/` automatically.

