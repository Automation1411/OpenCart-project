import {expect, Page, Locator} from '@playwright/test';
export class Login{
    readonly page: Page;
    readonly loginbutton: Locator;
    readonly usernameandemail: Locator;
    readonly usernameandemailinput: Locator
    readonly password : Locator;
    readonly inputpassword: Locator;
    readonly forgotpassword: Locator;
    readonly clickloginbutton: Locator;

    constructor(page:Page){
        this.page = page;
        this.loginbutton = page.getByRole('link',{name : 'Log In '});
        this.usernameandemail = page.locator('#login-form').getByLabel('Username or Email (case-sensitive)');
        this.usernameandemailinput = page.locator('#login-form').getByPlaceholder('Username or Email (case-sensitive)');
        this.password = page.locator('#login-form').getByLabel('Password');
        this.inputpassword = page.locator("#login-form").getByPlaceholder('Password');
        this.forgotpassword = page.locator('#login-form').getByText('Forgot Password?');
        this.clickloginbutton = page.locator(".btn.btn-info.w-100.mb-4")
    }

    async open(){
        await this.page.goto("/");
    }
// Verify with positive data
    async verifyusername(){
        await this.loginbutton.click();
        expect (this.usernameandemail).toBeVisible();
    }
  
    async verifyinputplace(){
    await expect(this.usernameandemailinput).toBeVisible();
    await this.usernameandemailinput.fill('akash1420test')
    }

    async verifypassword(){
        await expect(this.password).toBeVisible();
        await this.inputpassword.fill('user1234');

    }
    async verifyforgotpassword(){
        await expect(this.forgotpassword).toBeVisible();
    }

    async verifyclickloginbutton(){
        expect (this.clickloginbutton).toBeVisible();
        await this.clickloginbutton.click();
    }

}