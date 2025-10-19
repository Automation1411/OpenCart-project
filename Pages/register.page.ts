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
    readonly checkbox: Locator;
    readonly getstartedclick: Locator;
    readonly next : Locator;
    readonly finish: Locator;
    readonly user: Locator;
    readonly Logout : Locator;

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
        this.checkbox = page.locator("//div[@class='custom-control custom-checkbox mb-4']//input[@type='checkbox']");
        this.getstartedclick = page.locator('.btn.btn-info.d-block.w-100.sign-up.mx-auto.mb-5');
        this.next = page.locator('.next-outer');
        this.finish= page.getByText('Finish');
        this.user = page.getByRole('button',{name: 'User'});
        this.Logout = page.locator('#menu_collapse').getByText('Log Out');
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
      //const passwordcred = "user" + Math.floor(Math.random()*10000);
      const passwordcred = "user1234"
      await this.Password.fill(passwordcred);
      await this.confirmPassword.fill(passwordcred)
      const enterpassword = await this.Password.inputValue();
      const enterconfirmpassword = await this.confirmPassword.inputValue();
      expect(enterpassword).toBe(enterconfirmpassword);
    }
    async button(){
        await this.Continue.click();
        await this.page.waitForLoadState('networkidle');
    }
    
    async selectcheckbox(){
    await this.checkbox.check({ force: true });
    await expect(this.checkbox).toBeChecked();
    }
    async getstartedbutton(){
    await this.getstartedclick.click();
   }

   async nextfinishclick(){
   await this.next.click();
   await this.finish.click();
   }

   async ClickUser(){
    await this.user.click();
   }
   async Clicklogout(){
    await this.Logout.click()
   }

    //Enter Invalid credentials Email, password and confirm password
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



