import{test, Page}from '@playwright/test';
import{Register} from '../../Pages/register.page';
test.describe("Register test cases", ()=>{
let register : Register;
test.beforeEach("run before each test",async({page})=>{
register = new Register(page);
await register.open();
await register.getstarted();
});
test.only("To verify the Register form with valid crede",async({page}:{page:Page})=>{
   await register.email("akash1415test@gmail.com");
   await register.password();
   await register.button();
   await register.selectcheckbox();
   await register.getstartedbutton();
   await page.waitForTimeout(4000);
   await register.nextfinishclick();
   await register.ClickUser();
   await register.Clicklogout();
});
test("To verify the resgiter form with inavlid data",async({page}:{page:Page})=>{
   await register.verifyemailvalidation("test@example.com");
   await register.verifypasswordvalidation();
});
});

