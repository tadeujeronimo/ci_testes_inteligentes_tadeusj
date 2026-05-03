import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('IA: navegar entre Home, Products e Cart com locators resilientes', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await test.step('Abrir lista de produtos', async () => {
    await homePage.openProducts();
    await expect(page).toHaveURL(/products/);
    await expect(page.getByRole('heading', { name: /all products/i })).toBeVisible();
  });

  await test.step('Abrir carrinho', async () => {
    await homePage.openCart();
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('li.active', { hasText: /shopping cart/i })).toBeVisible();
    await expect(page.getByText(/cart is empty!/i)).toBeVisible();
    await expect(page.getByRole('link', { name: 'here' })).toBeVisible();
  });
});