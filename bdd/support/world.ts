import {World,setWorldConstructor,Before,After} from '@cucumber/cucumber';import {chromium,Browser,Page} from '@playwright/test';
class CustomWorld extends World {browser!:Browser;page!:Page;}
setWorldConstructor(CustomWorld);
Before(async function(this:CustomWorld){this.browser=await chromium.launch({headless:true});this.page=await this.browser.newPage({baseURL:process.env.BASE_URL||'https://automationexercise.com'});});
After(async function(this:CustomWorld,scenario){if(scenario.result?.status==='FAILED')this.attach(await this.page.screenshot(),'image/png');await this.browser?.close();});
