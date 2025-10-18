import{expect,Page,Locator}from '@playwright/test';

export class Register{
    readonly page: Page;
    readonly Getstarted: Locator;
    readonly Email: Locator;
    readonly Password: Locator;
    readonly confirmPassword: Locator;
    readonly Continue: Locator;

    constructor(page: Page){
        this.page = page;
        this.Getstarted = page.getByRole('link',{name:'Get Started'});
        this.Email = page.getByPlaceholder('e.g., gryphon@example.com');
        this.Password = page.getByPlaceholder('e.g., ******************');
        this.confirmPassword = page.getByPlaceholder("Make sure it's the same password!");
        this.Continue = page.locator('#continue-button');
    }

    async open(){
        await this.page.goto('/');
    }
    async getstarted(){
        await this.Getstarted.click();
    }
    async email(email:string){
        await expect(this.Email).toBeVisible();
        await this.Email.fill(email);

    }
    async password(){
        const testpassword ='123456';
        await this.Password.fill(testpassword);
        await this.page.waitForTimeout(2000);
        const passowrdvalue = await this.Password.inputValue();
        expect(passowrdvalue.length).toBeGreaterThan(8);
        expect(passowrdvalue).toBe('123456789');
        
    }
    async confirmpassword(){
        await this.confirmPassword.fill('123456789');
    }
    async button(){
        await this.Continue.click();
    }
}