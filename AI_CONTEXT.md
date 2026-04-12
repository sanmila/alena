# AI CONTEXT - VERSION 1
**Last Updated:** April 2026
**Project:** Alena Gotto - Hypnotherapist & Transformational Practitioner Website

This file contains critical context, infrastructure details, and architectural decisions made during the initial Version 1 deployment phase. **Future AI Agents MUST read this file before making modifications.**

## 1. Source Control & Repository
* The project has been fully initialized with Git.
* The remote repository is located at: `https://github.com/sanmila/alena`
* A standard Vite-specific `.gitignore` is in place holding back `node_modules` and `dist` artifacts.

## 2. Server Infrastructure & VPS Deployment
* **VPS IP Address:** `31.128.41.93`
* **Secure Web Root Path:** `/var/www/alena`
* **Deployment Method:** We run `npm run build` locally, and then transfer the optimized `dist/` directory directly into `/var/www/alena` on the server via SSH.

## 3. Nginx Router Configuration
* **Dashboard Manager:** The server utilizes a custom Node.js VPS Dashboard running on port `9000`.
* **Current Route Config:** The Nginx block was mapped to securely intercept traffic for `31.128.41.93` and `preview-alena.sanjay.ru`.
* Important: Modifications to domains or SSL installations should happen primarily through the VPS Dashboard UI. 

## 4. Vite Build specific Configuration
* The `vite.config.js` uses `base: '/'`. 
* **Warning:** Do NOT change the base URL to `/alena/` or anything else unless moving to a subfolder structure. Serving from the root IP requires it to be `/`, otherwise assets will 404 (Blank White Page Error).

## 5. Media & Assets Optimization
* All standard UI imagery (`hero.webp`, `lifestyle.webp`, etc.) located within `src/assets/images` has been explicitly converted to efficient `.webp` formats to maximize Google Lighthouse scores.
* **CRITICAL EXCEPTION:** The OpenGraph fallback image (`public/images/telegram-preview.jpg`) and corresponding `<meta>` tags in `index.html` were purposefully reverted to standard `image/jpeg` (`.jpg`). **DO NOT CONVERT THIS TO WEBP.** Changing it will completely break visual link thumbnails on platforms like iMessage, LinkedIn, or older WhatsApp builds.
