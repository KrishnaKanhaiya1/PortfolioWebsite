# Deployment Guide

To deploy your portfolio website live, follow these steps:

## Option 1: GitHub Pages (Recommended)

1.  **Create a Repository**:
    *   Go to GitHub and create a new repository named `portfolio`.
    *   Do **not** initialize with README/license (use empty repo).

2.  **Push Code**:
    Open your terminal in this folder and run:
    ```bash
    git remote add origin https://github.com/KrishnaKanhaiya1/portfolio.git
    git branch -M main
    git push -u origin main
    ```

3.  **Deploy**:
    ```bash
    npm run deploy
    ```
    *   This command builds the project and pushes it to the `gh-pages` branch.
    *   Your site will be live at: `https://KrishnaKanhaiya1.github.io/portfolio/`

## Option 2: Vercel (Fastest)

1.  Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```
2.  Deploy:
    ```bash
    vercel --prod
    ```
    *   Follow the prompts to link your GitHub account.

## Option 3: Netlify (Drag & Drop)

1.  Locate the `dist` folder in this directory (created after `npm run build`).
2.  Go to [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop the `dist` folder onto the page.
