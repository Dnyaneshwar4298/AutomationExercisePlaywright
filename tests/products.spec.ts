import {test,expect} from '@playwright/test';import {HomePage} from '../pages/HomePage';import {ProductsPage} from '../pages/ProductsPage';
test('catalog lists products',async({page})=>{const home=new HomePage(page),products=new ProductsPage(page);await home.open();await home.products();await products.expectCatalog();});
test('search products',async({page})=>{const home=new HomePage(page),products=new ProductsPage(page);await home.open();await home.products();await products.search('Top');await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();});
test('product details show availability',async({page})=>{const home=new HomePage(page),products=new ProductsPage(page);await home.open();await home.products();await products.openFirstProduct();await products.expectDetails();});
test('add item to cart',async({page})=>{const home=new HomePage(page),products=new ProductsPage(page);await home.open();await home.products();await products.addFirstProduct();});
