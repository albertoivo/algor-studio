# Regras e Instruções para Agentes — ALGOR STUDIO

Este arquivo define as diretrizes operacionais, restrições e padrões para qualquer agente de inteligência artificial ou desenvolvedor trabalhando no repositório `algor-studio`.

---

## 1. Princípios Fundamentais

1. **Stack Imutável (a menos que o usuário solicite explicitamente):**
   * **HTML5 Semântico Puro**
   * **Vanilla CSS Moderno** (sem Tailwind, sem Bootstrap, sem pré-processadores)
   * **Vanilla JavaScript ES6+ Modular** (sem frameworks como React, Vue, Angular)
   * Motivo: Garantir velocidade absoluta (< 500ms de carregamento), zero overhead de runtime e nota 100/100 no Google Lighthouse.

2. **Direção Visual Obrigatória:**
   * **Clean Modern / Light Tech** (estilo Stripe, Linear, Apple, Vercel Light).
   * Fundo limpo off-white (`#F8FAFC`), superfícies brancas puras com elevações sutis e bordas finas com transparência.
   * Tipografia refinada (`Plus Jakarta Sans` ou `Inter`).
   * Acentos de cor em Azul Real e Índigo.
   * Jamais crie interfaces simples ou com aspecto de MVP amador. A apresentação visual deve ser sofisticada e elegante.

3. **SEO e Acessibilidade como Requisitos Não-Negociáveis:**
   * Todo conteúdo essencial deve estar renderizado no HTML estático para indexação instantânea por crawlers.
   * Metadados Open Graph e Schema.org (JSON-LD) devem estar sempre atualizados com a lista de projetos.
   * Componentes interativos (como modais de projetos) devem usar elementos nativos (`<dialog>`) com foco gerenciado e suporte completo à tecla `Escape`.

---

## 2. Catálogo de Projetos

Qualquer alteração ou exibição de projetos deve manter fidelidade aos dados oficiais dos projetos da ALGOR STUDIO:

* **PyExplorer:** Jogo educativo gamificado para aprender Python nativo no navegador (WebAssembly/Pyodide, Turtle, 4 Sagas, 18 Mundos). Link de produção: `https://pyexplorer.com.br`.
* **LogicKids:** Plataforma gamificada de programação em blocos e lógica computacional para escolas e instituições de ensino (Blockly + FastAPI + Next.js).
* **Family-Finance:** Gestão de patrimônio e finanças familiares com o Conselho de Família IA (Gemini AI com conselheiros de Risco, Dividendos e Oportunidades).
* **Iniciativas Futuras:** Seção de novos projetos em pesquisa e desenvolvimento (Algor Labs).

Novos projetos devem ser inseridos prioritariamente no arquivo de dados `js/data/projects.js` e refletidos nas marcações de SEO.

---

## 3. Comandos Úteis e Validação Local

Para executar e testar o projeto localmente:

```bash
# Servidor HTTP local simples (Python 3)
python3 -m http.server 8080

# Ou via npx (se disponível)
npx -y serve . -p 8080
```

### Checklist de Qualidade antes de finalizar tarefas:
- [ ] O arquivo HTML é semanticamente válido (sem divs soltas desnecessárias).
- [ ] O design se mantém impecável no desktop e responsivo no mobile.
- [ ] Todas as imagens possuem `alt`, `width`, `height` e `loading="lazy"`.
- [ ] O modal abre suavemente e fecha tanto pelo botão fechar, clicando fora, ou pressionando `Escape`.
- [ ] O Schema.org JSON-LD é válido e sem erros de sintaxe.
- [ ] Todos os links externos contêm `target="_blank" rel="noopener noreferrer"`.
