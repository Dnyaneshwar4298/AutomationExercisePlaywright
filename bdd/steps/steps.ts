import {Given,When,Then} from '@cucumber/cucumber';import {expect} from '@playwright/test';import {HomePage} from '../../pages/HomePage';import {LoginPage} from '../../pages/LoginPage';import {SignupPage} from '../../pages/SignupPage';import {ProductsPage} from '../../pages/ProductsPage';import {ContactPage} from '../../pages/ContactPage';import {account,uniqueEmail} from '../../utils/testData';
Given('I am on the homepage',async function(){await new HomePage(this.page).open();});
Given('I am on the signup login page',async function(){const h=new HomePage(this.page);await h.open();await h.signupLogin();});
When('I register a unique account',async function(){await new LoginPage(this.page).signup(account.name,uniqueEmail());await new SignupPage(this.page).register();});
Then('my account is created',async function(){await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();await new SignupPage(this.page).continue();await new SignupPage(this.page).deleteAccount();});
When('I open the products catalog',async function(){await new HomePage(this.page).products();});
Then('products should be displayed',async function(){await new ProductsPage(this.page).expectCatalog();});
When('I submit the contact form with attachment',async function(){await new HomePage(this.page).contact();await new ContactPage(this.page).submit();});
Then('the contact form succeeds',async function(){await expect(this.page.locator('.status')).toContainText('Success!');});
