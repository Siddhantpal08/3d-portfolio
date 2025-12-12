# 3D Portfolio — Siddhant Pal

> A showcase of my 3D work and interactive portfolio site / WebGL viewer.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Demo
Live demo: https://siddhant-pal-portfolio.vercel.app/

## Screenshots
![Thumbnail](src/assets/thumbnail.png)

## About
This repository contains the compiled/built version of my 3D portfolio along with source files, models, textures and the site that hosts/embeds the 3D viewer. The portfolio uses:
- Three.js 
- Vite React
- Exported models: `.glb`, `.fbx` (some tracked with Git LFS)

## Features
- Interactive 3D viewer with camera controls and model annotations
- Responsive layout with gallery and project pages
- Downloadable model assets or can go to sketchfab
- Project details, technical breakdown, and contact links

## How to run locally
### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- (Optional) Git LFS for large model files

### Steps
```bash
# clone the repo
git clone https://github.com/Siddhantpal08/3d-portfolio.git
cd 3d-portfolio

# install dependencies (if a JS project)
npm install
# or
yarn

# start dev server
npm run dev
# or
yarn dev
