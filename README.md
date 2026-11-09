# Relato Integrado — Superintendência Administrativa e Financeira (CREA-TO)

Painel web institucional em página única (Single-Page Application) desenvolvido como roteiro visual de exposição para a **Equipe de Transição do Crea-TO** (instituída pela **Portaria Crea-TO nº 083/2026**, de 28 de outubro de 2026).

## 📋 Estrutura do Roteiro de Apresentação

1. **Visão Macro, Governança e Força de Trabalho:** Histórico da Superintendência (2021–2026), competências regimentais, organograma das 4 Gerências e 5 Áreas, quadro nominal de lotação (22 vínculos) e alerta estratégico sobre absorção cumulativa de funções.
2. **Ecossistema de Softwares e Transparência:** Detalhamento dos 11 sistemas estruturantes (custo mensal médio de R$ 29.095,32) e integração automática com o Portal da Transparência (LAI e Acórdãos do TCU).
3. **Posicionamento na Região Norte (2026):** Comparativo entre os 7 Creas do Norte (PA, AM, TO, RO, AP, RR e AC), destacando o Crea-TO como **3ª força orçamentária/arrecadatória** e **2º lugar em eficiência per capita** (R$ 207.085,55 por empregado).
4. **Planejamento e Orçamento 2027:** Evolução trienal (2025–2027), regra da Partição na Origem (Lei nº 6.496/77), carteira de convênios (Confea e Mútua), limite prudencial de pessoal (LRF / Acórdão TCU nº 341/2004) e ritos de reformulação/transposição.
5. **Execução 2026, Disponibilidades e Regularidade Fiscal:** Balanço orçamentário acumulado até setembro/2026, saldos bancários próprios em 06/11/2026 (R$ 5.071.518,99 — Liquidez Imediata de 1,3524), execução por Centro de Custos e validade das CNDs.
6. **O Caminho da Despesa:** Fluxograma sequencial das 23 etapas do processo de despesa pública no Crea-TO (do ETP ao tombamento e depreciação).
7. **Despesas Aprovadas para 2027 por Unidade (Módulo Interativo):** Painel navegável por cliques, com busca em tempo real e filtros por categoria, detalhando todas as contas contábeis que compõem os **R$ 18.064.000,00** aprovados para 2027.

---

## 🚀 Como Publicar Gratuitamente

Todos os arquivos são estáticos (HTML5, CSS3 e JavaScript Vanilla), sem necessidade de banco de dados ou servidor backend.

### Opção 1: GitHub Pages
1. Crie um repositório no GitHub e envie os 4 arquivos (`index.html`, `style.css`, `script.js` e `README.md`) para a raiz do repositório.
2. No repositório, acesse **Settings** > **Pages**.
3. Em **Build and deployment** > **Branch**, selecione `main` (pasta `/root`) e clique em **Save**.
4. O link público estará disponível em poucos segundos.

### Opção 2: Netlify (Arrastar e Soltar)
1. Coloque os 4 arquivos dentro de uma única pasta no seu computador.
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
3. Arraste a pasta diretamente para a área pontilhada no navegador para publicação instantânea.

### Opção 3: Vercel
1. Conecte seu repositório GitHub na [Vercel](https://vercel.com) ou utilize o Vercel CLI (`vercel --prod` na pasta do projeto).
2. Como o projeto possui um `index.html` na raiz, nenhuma configuração adicional de build é necessária.