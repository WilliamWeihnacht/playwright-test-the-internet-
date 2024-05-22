import { test, expect, chromium } from '@playwright/test';

test.describe('Test basic auth', () => {

  test('successfully login', async ({ page }) => {
    await page.goto('/basic_auth/');
    page.on('dialog', async dialog => {

        const x = page.locator('input[type="text"]')
        await x.fill('admin')

        await dialog.accept()
    });
  })

});