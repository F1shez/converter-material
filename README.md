# Converter Material

[online demo](https://f1shez.github.io/converter-material-pbr/)

This project converts material textures from specular/glossiness workflow to metallic/roughness workflow and then you can download converted maps.

Warning: This project may not be accurate. I created custom shader for show specular/glossines workflow from physicmaterial meshphysical.glsl.js it may not be accurate for this workflow.

Example screenshot:
Choose maps to convert
![Example Screenshot](./public/image1.png)
and get converted maps
![Example Screenshot](./public/image2.png)

## Key Technologies

- **Vite**: A fast and lightweight build tool for frontend projects.
- **SolidJS**: A highly performant reactive framework for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for building stylish and responsive interfaces.
- **THREEJS**: The JavaScript 3D library.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/F1shez/converter-material.git
   cd converter-material
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Copy your texture for test in 'public/specular' (i use ChainmailCopperRoundedThin001 for test)

## Running the Project

To run the project in development mode:

```bash
npm run dev
```
