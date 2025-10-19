import{test, Page}from '@playwright/test';
import{Register} from '../../Pages/register.page';
test.describe("Register test cases", ()=>{
let register : Register;

test.beforeEach("run before everytest",async({page})=>{
register = new Register(page);
await register.open();
await register.getstarted();
});
test("To verify the Register form with valid crede",async({page}:{page:Page})=>{
   await register.email("ayushtest@gmail.com");
   await register.password();
   await register.button();
});
test.only("To verify the resgiter form with inavlid data",async({page}:{page:Page})=>{
   await register.verifyemailvalidation("test@example.com");
   await register.verifypasswordvalidation();
})
});