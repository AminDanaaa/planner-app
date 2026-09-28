# Webpack Template

A simple, ready-to-use Webpack 5 starter template for vanilla JavaScript projects.

## Features

- Webpack 5 with separate dev and production configs
- CSS loading via `style-loader` + `css-loader`
- HTML generation via `html-webpack-plugin`
- Asset handling for images
- Dev server with hot reload

## Setup (Note: Do these steps in order)

1. Click the **"Use this template"** button on GitHub, or clone it.
2. Run `npm init -y` to auto-populate repository metadata from your git remote.
3. Install dependencies: `npm install`.
4. Start developing: `npm start` — opens http://localhost:8080 with hot reload.

## Build for production

1. Run the production script: `npm run build`.
2. Output goes to `dist/`.

> **Note:** This template intentionally does not ship a `package-lock.json`.
> Once you've installed dependencies, commit the generated lock file to your
> own repo for reproducible builds.