#!/usr/bin/env node

/**
 * Script de build e sincronização do CSS para o ALGOR STUDIO.
 * 
 * 1. Concatena os arquivos modulares da pasta `css/` em `css/styles.css`.
 * 2. Atualiza o CSS inline no `index.html` para eliminar render-blocking requests (100/100 Lighthouse).
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const cssFiles = [
  'css/variables.css',
  'css/base.css',
  'css/components.css',
  'css/sections.css'
];

// 1. Ler e concatenar os arquivos CSS modulares
const cssContents = cssFiles.map(relPath => {
  const fullPath = path.join(rootDir, relPath);
  return fs.readFileSync(fullPath, 'utf8');
});

const combinedCss = cssContents.join('\n\n');

// 2. Gravar css/styles.css consolidado (mantendo caminho relativo ../assets/fonts)
fs.writeFileSync(path.join(rootDir, 'css/styles.css'), combinedCss, 'utf8');
console.log('✔ css/styles.css gerado com sucesso.');

// 3. Ajustar caminhos para inlining na raiz (./assets/fonts)
const inlinedCss = combinedCss.replace(/\.\.\/assets\/fonts\//g, './assets/fonts/');

// 4. Injetar no index.html
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const styleBlock = `  <!-- CSS Inlined: 0 render-blocking requests para LCP/FCP instantâneo (<500ms) -->\n  <style id="algor-styles">\n${inlinedCss}\n  </style>`;

// Substituir links antigos ou bloco de estilo anterior
const linkRegex = /\s*<!-- CSS Inlined:.*?<\/style>|\s*<link rel="stylesheet" href="\.\/css\/variables\.css">[\s\S]*?<link rel="stylesheet" href="\.\/css\/sections\.css">/;

if (linkRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(linkRegex, '\n' + styleBlock);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('✔ index.html atualizado com CSS inlined com sucesso.');
} else {
  console.error('✖ Não foi possível encontrar o bloco de CSS para substituição no index.html.');
  process.exit(1);
}
