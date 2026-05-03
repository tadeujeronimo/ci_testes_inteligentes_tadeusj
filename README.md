# CI e automação de testes com Playwright

![CI](https://github.com/tadeujeronimo/ci_testes_inteligentes_tadeusj/actions/workflows/ci.yml/badge.svg)

Projeto de automação de testes para a atividade de Engenharia de Software, usando a aplicação pública [Automation Exercise](https://automationexercise.com/).

## Estrutura

- `tests/manual`: testes criados manualmente.
- `tests/ai`: testes com suporte de IA (Copilot/Codegen).
- `playwright.config.ts`: configuração do Playwright.
- `.github/workflows/ci.yml`: pipelines GitHub Actions.

## Instalação

```bash
npm install
npx playwright install --with-deps chromium
```

## Execução local

```bash
npx playwright test                 # todos os testes
npm run test:manual                 # apenas testes manuais
npm run test:ai                     # apenas testes com IA
```

## GitHub Actions

O workflow executa duas jobs sequenciais:
- `manual-tests`: executa os testes manuais.
- `ai-tests`: executa os testes com IA (depende da primeira passar).

Disparadores: push em branches de trabalho e pull request para `main`/`master`.

Se falhar, acesse **Actions** no repositório, abra a execução e baixe os artefatos (contêm relatório HTML, screenshots e vídeos).

## Sobre IA

Os scripts foram gerados/refinados com GitHub Copilot e Playwright Codegen durante o desenvolvimento. No CI, os testes rodam como código estático — sem invocar Copilot em tempo de execução.

## Créditos

- **Ferramenta de automação**: [Playwright](https://playwright.dev)
- **Aplicação-alvo**: [Automation Exercise](https://automationexercise.com)
- **Apoio de IA**: GitHub Copilot e Playwright Codegen
- **CI/CD**: GitHub Actions

## Autor

- **Nome**: Tadeu dos Santos Jerônimo
- **Matrícula**: 2026202194
- **E-mail**: tadeus.jeronimo@gmail.com
- **Disciplina**: Engenharia de Software - IF Sudeste/MG