import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  private async recoverFromGoogleVignette(targetPath: string) {
    if (this.page.url().includes('#google_vignette')) {
      await this.page.goto(targetPath, { waitUntil: 'domcontentloaded' });
    }
  }

  async open() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Automation Exercise/i);
  }

  async openSignupLogin() {
    await this.page.locator('a[href="/login"]').first().click();
    await this.recoverFromGoogleVignette('/login');
    await this.page.waitForURL(/\/login/);
  }

  async openProducts() {
    await this.page.locator('a[href="/products"]').first().click();
    await this.recoverFromGoogleVignette('/products');
    await this.page.waitForURL(/\/products/);
  }

  async openCart() {
    await this.page.locator('a[href="/view_cart"]').first().click();
    await this.recoverFromGoogleVignette('/view_cart');
    await this.page.waitForURL(/\/view_cart/);
  }
}