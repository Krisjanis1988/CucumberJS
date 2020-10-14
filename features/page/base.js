'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const driver = new seleniumWebdriver.Builder()
      .forBrowser('chrome')
      .build();
const website = "https://www.booking.com/";
const user = require ('./../support/helpers');
const username = user.getRandomString(10);

class BasePage {

    constructor() {
        global.driver = driver;
        global.username = username;
    }
    async navigateToTheHomePage() {
        await driver.manage().window().maximize();
        await driver.get(website);
    }
}
module.exports = BasePage;