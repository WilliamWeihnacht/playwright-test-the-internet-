import { test, expect, type Page } from '@playwright/test';

test.beforeEach('Open start URL',async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('/checkboxes');
})

test.describe('Test Checkboxes', () => {

    test('check the first element', async ({ page }) => {
      const checkbox1 = page.locator('#checkboxes > input[type=checkbox]').nth(0)
      await expect(checkbox1).toBeVisible()
      await checkbox1.check()
      await expect(checkbox1).toBeChecked()
    })

    test('uncheck the second element', async ({ page }) => {
      const checkbox2 = page.locator('#checkboxes > input[type=checkbox]').nth(1)
      await expect(checkbox2).toBeChecked()
      await checkbox2.uncheck()
      await expect(checkbox2).not.toBeChecked()
    })
  
  });