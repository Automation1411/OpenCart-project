import{test, Page}from '@playwright/test';
import{Register} from '../../Pages/register.page';

test(" @smoke To verify the Register form",async({page}:{page:Page})=>{
   const regsiterpage = new Register(page);
   await regsiterpage.open();
   await regsiterpage.getstarted();
   await regsiterpage.email("ayushtest@gmail.com");
   await regsiterpage.password();
   await regsiterpage.confirmpassword();
   await regsiterpage.button();
})