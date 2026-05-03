import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { HomePage } from '../pages/home.page';
import { uniqueEmail } from '../helpers/test-data';

test('IA: cadastrar uma nova conta com apoio de estrutura reutilizável', async ({ page }) => {
  const homePage = new HomePage(page);
  const authPage = new AuthPage(page);

  const name = 'Aluno IA';
  const email = uniqueEmail('ai');

  await homePage.open();
  await homePage.openSignupLogin();
  await authPage.expectLoginSignupPage();

  await test.step('Gerar e preencher dados de cadastro', async () => {
    await authPage.signup(name, email);
    await page.getByText('Enter Account Information').waitFor();
    await authPage.completeAccountCreation();
    await authPage.confirmAccountCreated();
  });

  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
});