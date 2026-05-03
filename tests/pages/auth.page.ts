import { expect, Page } from '@playwright/test';
import { password } from '../helpers/test-data';

export class AuthPage {
  constructor(private readonly page: Page) {}

  async expectLoginSignupPage() {
    await expect(this.page.getByText('Login to your account')).toBeVisible();
    await expect(this.page.getByText('New User Signup!')).toBeVisible();
  }

  async signup(name: string, email: string) {
    await this.page.locator('[data-qa="signup-name"]').fill(name);
    await this.page.locator('[data-qa="signup-email"]').fill(email);
    await this.page.locator('[data-qa="signup-button"]').click();
  }

  async completeAccountCreation() {
    await this.page.getByLabel('Mr.').check();
    await this.page.locator('[data-qa="password"]').fill(password);
    await this.page.locator('[data-qa="days"]').selectOption('10');
    await this.page.locator('[data-qa="months"]').selectOption('5');
    await this.page.locator('[data-qa="years"]').selectOption('1995');
    await this.page.getByLabel('Sign up for our newsletter!').check();
    await this.page.getByLabel('Receive special offers from our partners!').check();
    await this.page.locator('[data-qa="first_name"]').fill('Teste');
    await this.page.locator('[data-qa="last_name"]').fill('QA');
    await this.page.locator('[data-qa="company"]').fill('IF Sudeste MG');
    await this.page.locator('[data-qa="address"]').fill('Rua de Teste, 123');
    await this.page.locator('[data-qa="country"]').selectOption({ label: 'United States' });
    await this.page.locator('[data-qa="state"]').fill('MG');
    await this.page.locator('[data-qa="city"]').fill('Juiz de Fora');
    await this.page.locator('[data-qa="zipcode"]').fill('36000000');
    await this.page.locator('[data-qa="mobile_number"]').fill('31999999999');
    await this.page.locator('[data-qa="create-account"]').click();
  }

  async confirmAccountCreated() {
    await expect(this.page.getByText('Account Created!')).toBeVisible();
    await this.page.getByRole('link', { name: /continue/i }).click();
  }
}