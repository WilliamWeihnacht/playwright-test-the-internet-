import { test, expect } from '@playwright/test';

test.beforeEach('Open start URL',async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://the-internet.herokuapp.com/');
})

//sanity check/ make sure we are on right site
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('The Internet');
});

test.describe('Add Remove Elements', () => {

  //TODO navigate to add elements page

  test('add elements', async ({ page }) => {

    const addButton = page.getByText('Add Element');


  })

});