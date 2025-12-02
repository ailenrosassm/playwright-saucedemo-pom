/*import {expect, test} from "@playwright/test";

test("first test",async({page})=>{
    console.log("my first test") 
    await page.goto("https://www.saucedemo.com/");
    await page.fill('#user-name','standard_user');
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.click('#shopping_cart_container');
    await page.click('#checkout');
    await page.fill('#first-name', 'Pedro');
    await page.fill('#last-name', 'Torres');
    
})*/

import {expect, test} from "@playwright/test";
import { LoginPage } from '../pages/login.ts';
import { CheckoutPage } from '../pages/checkout.ts';

test("first test", async ({ page }) => {
    const login = new LoginPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login("standard_user", "secret_sauce");

    await checkout.checkout("Pedro", "Perez","857334");
});