import {test} from '@playwright/test';import {HomePage} from '../pages/HomePage';import {ContactPage} from '../pages/ContactPage';
test('submit contact form with file upload',async({page})=>{const home=new HomePage(page);await home.open();await home.contact();await new ContactPage(page).submit();});
