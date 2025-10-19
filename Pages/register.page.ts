import{expect,Page,Locator}from '@playwright/test';

export class Register{
    readonly page: Page;
    readonly Getstarted: Locator;
    readonly Email: Locator;
    readonly validateEmail: Locator
    readonly Password: Locator;
    readonly validPassword: Locator;
    readonly confirmPassword: Locator;
    readonly validateConfirmPassword: Locator;
    readonly Continue: Locator;

    constructor(page: Page){
        this.page = page;
        this.Getstarted = page.getByRole('link',{name:'Get Started'});
        this.Email = page.getByPlaceholder('e.g., gryphon@example.com');
        this.validateEmail = page.getByText('Please enter a valid email address. Email admin@habitica.com if this error persists.')
        this.Password = page.getByPlaceholder('e.g., ******************');
        this.validPassword = page.getByText('Password must be 8 characters or more.')
        this.confirmPassword = page.getByPlaceholder("Make sure it's the same password!");
        this.validateConfirmPassword = page.getByText("Password confirmation doesn't match password.")
        this.Continue = page.locator('#continue-button');
    }

    async open(){
        await this.page.goto('/');
    }
    async getstarted(){
        await this.Getstarted.click();
    }

    // Enter valid credentials Email, password and confirm password
    async email(email:string){
       await this.Email.fill(email);
    }
    async password(){
      const passwordcred = "user" + Math.floor(Math.random()*10000);
      await this.Password.fill(passwordcred);
      await this.confirmPassword.fill(passwordcred)
      const enterpassword = await this.Password.inputValue();
      const enterconfirmpassword = await this.confirmPassword.inputValue();
      expect(enterpassword).toBe(enterconfirmpassword);
    }
    async button(){
        await this.Continue.click();
    }

    //Enter Invalid credentials Email, password and confirma password
    async verifyemailvalidation(eaddress:string){
        await this.Email.fill(eaddress);
        await expect(this.validateEmail).toBeVisible();
    }

    async verifypasswordvalidation(){
        const enterpsw = "u"+ Math.floor(Math.random()*10000);
        await this.Password.fill(enterpsw);
        await expect(this.validPassword).toBeVisible();
        const enterconfirmpsw= this.confirmPassword;
        await enterconfirmpsw.fill("test1234")
        await expect(this.validateConfirmPassword).toBeVisible();
    }

}



