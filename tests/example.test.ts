import { test, expect } from '@playwright/test';
import exp from 'constants';

test.beforeEach('Open start URL',async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/add_remove_elements/');

  const addButton = page.getByText('Add Element');
  await addButton.click();
})

//sanity check/ make sure we are on right site
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('The Internet');
});

test.describe('Add Remove Elements', () => {

  test('add one element', async ({ page }) => {
    const newElement = page.getByText('Delete');
    await expect(newElement).toBeVisible();
  })

  test('Add and remove an element', async ({ page }) => {
    const newElement = page.getByText('Delete');
    await newElement.click();
    await expect(newElement).not.toBeAttached();
  }) 

});