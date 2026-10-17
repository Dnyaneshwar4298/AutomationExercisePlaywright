import {Page, test} from '@playwright/test';
export async function dismissOverlays(page:Page){const consent=page.getByRole('button',{name:/consent|accept all/i});if(await consent.isVisible().catch(()=>false)) await consent.click().catch(()=>{});}
export async function attachScreenshot(page:Page,name='screenshot'){await test.info().attach(name,{body:await page.screenshot(),contentType:'image/png'});}
