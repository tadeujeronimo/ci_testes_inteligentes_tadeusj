import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Manual: navegar entre Home, Products e Cart', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.openProducts();
  await expect(page).toHaveURL(/products/);
  await expect(page.getByText('All Products')).toBeVisible();

  await homePage.openCart();
  await expect(page).toHaveURL(/view_cart/);
  await expect(page.getByText('Shopping Cart')).toBeVisible();
});