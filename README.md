# CI e automação de testes com Playwright

![CI](https://github.com/tadeujeronimo/ci_testes_inteligentes_tadeusj/actions/workflows/ci.yml/badge.svg)

Projeto de automação de testes para a atividade de Engenharia de Software, usando a aplicação pública [Automation Exercise](https://automationexercise.com/).
Projeto de automação de testes com duas pipelines CI (testes manuais + testes com IA) para a atividade de Engenharia de Software, usando a aplicação pública [Automation Exercise](https://automationexercise.com/).

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
npx playwright test   # todos os testes
npm run test:manual   # apenas testes manuais
npm run test:ai       # apenas testes com IA
```

## Gerando relatórios

Após executar os testes, os relatórios HTML são gerados automaticamente:

```bash
npx playwright test
npx playwright show-report
```

Para gerar relatórios separados por suíte:

```bash
npm run test:manual
npx playwright show-report

npm run test:ai
npx playwright show-report
```

Os relatórios contêm:
- Status de cada teste (passou/falhou)
- Screenshots de falhas
- Vídeos de execução
- Traces para depuração
- Duração total

## GitHub Actions

O workflow executa duas jobs sequenciais:
- `manual-tests`: executa os testes manuais.
- `ai-tests`: executa os testes com IA (depende da primeira passar).

Disparadores: push em branches de trabalho e pull request para `main`/`master`.

Se falhar, acesse **Actions** no repositório, abra a execução e baixe os artefatos (contêm relatório HTML, screenshots e vídeos).

## Sobre IA

GitHub Copilot e Playwright Codegen foram utilizados para geração e refinamento dos scripts de teste durante o desenvolvimento. Todos os testes passaram por validação humana. No CI, os testes são executados como código estático, sem dependência de ferramentas de IA em tempo de execução.

## Créditos

- [Playwright](https://playwright.dev) - Ferramenta de automação de testes
- [Automation Exercise](https://automationexercise.com) - Aplicação-alvo para testes

## Autor

- **Nome**: Tadeu dos Santos Jerônimo
- **Matrícula**: 2026202194
- **E-mail**: tadeus.jeronimo@gmail.com
- **Disciplina**: Engenharia de Software
- **Curso**: Especialização em Desenvolvimento Web e Mobile - IF Sudeste/MG