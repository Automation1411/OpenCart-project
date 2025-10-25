import{test, Page} from '@playwright/test';
import { Login } from  '../../Pages/login.page';
test("verify login",async({page}:{page:Page})=>{
  const loginform = new Login(page)
  await loginform.open();
  await loginform.verifyusername();
  await loginform.verifyinputplace();
  await loginform.verifypassword();
  await loginform.verifyforgotpassword();
  await loginform.verifyclickloginbutton();
})