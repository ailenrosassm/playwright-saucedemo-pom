import { Page } from "@playwright/test";

export class CheckoutPage {
    constructor(private page: Page) {}

     async checkout(firstName: string, lastName: string, cp: string) {
        await this.page.click('#shopping_cart_container');
        await this.page.click('#checkout');

        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', cp);
        
        await this.page.click('#continue');
        
    }

    
}