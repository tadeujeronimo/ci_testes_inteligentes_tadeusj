import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { HomePage } from '../pages/home.page';
import { uniqueEmail } from '../helpers/test-data';

test('Manual: cadastrar uma nova conta e validar login', async ({ page }) => {
  const homePage = new HomePage(page);
  const authPage = new AuthPage(page);

  const name = 'Aluno Manual';
  const email = uniqueEmail('manual');

  await homePage.open();
  await homePage.openSignupLogin();
  await authPage.expectLoginSignupPage();
  await authPage.signup(name, email);
  await page.getByText('Enter Account Information').waitFor();
  await authPage.completeAccountCreation();
  await authPage.confirmAccountCreated();

  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
});