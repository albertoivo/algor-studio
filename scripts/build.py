#!/usr/bin/env python3
"""
Script de build e sincronização do CSS para o ALGOR STUDIO.

1. Concatena os arquivos modulares da pasta `css/` em `css/styles.css`.
2. Atualiza o CSS inline no `index.html` para eliminar render-blocking requests (100/100 Lighthouse).
"""

import re
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
CSS_FILES = [
    ROOT_DIR / "css" / "variables.css",
    ROOT_DIR / "css" / "base.css",
    ROOT_DIR / "css" / "components.css",
    ROOT_DIR / "css" / "sections.css",
]

def main():
    # 1. Ler e concatenar os arquivos modulares
    contents = [f.read_text(encoding="utf-8") for f in CSS_FILES]
    combined_css = "\n\n".join(contents)

    # 2. Gravar css/styles.css consolidado
    styles_path = ROOT_DIR / "css" / "styles.css"
    styles_path.write_text(combined_css, encoding="utf-8")
    print("✔ css/styles.css gerado com sucesso.")

    # 3. Ajustar caminhos de fontes para inlining na raiz (./assets/fonts)
    inlined_css = combined_css.replace("../assets/fonts/", "./assets/fonts/")

    # 4. Injetar no index.html
    index_path = ROOT_DIR / "index.html"
    index_html = index_path.read_text(encoding="utf-8")

    style_block = (
        '  <!-- CSS Inlined: 0 render-blocking requests para LCP/FCP instantâneo (<500ms) -->\n'
        '  <style id="algor-styles">\n'
        f'{inlined_css}\n'
        '  </style>'
    )

    pattern = re.compile(
        r'(\s*<!-- CSS Inlined:.*?<\/style>|\s*<link rel="stylesheet" href="\.\/css\/variables\.css">[\s\S]*?<link rel="stylesheet" href="\.\/css\/sections\.css">)',
        re.DOTALL
    )

    if pattern.search(index_html):
        new_html = pattern.sub("\n" + style_block, index_html, count=1)
        index_path.write_text(new_html, encoding="utf-8")
        print("✔ index.html atualizado com CSS inlined com sucesso.")
    else:
        print("✖ Não foi possível encontrar o bloco de CSS para substituição no index.html.")
        exit(1)

if __name__ == "__main__":
    main()
