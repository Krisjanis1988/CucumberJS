'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const logInButton = ".js-header-login-link";
const logInField = "login_name_register";

class signPage extends BasePage {
    async navigateToTheSignUpPage() {
        await driver.findElement(By.css(logInButton)).click();
    }

    async enterEmail() {
        await driver.wait(until.elementLocated(By.id(logInField)), 7000)
          .then (element => element.sendKeys(username)); 
          
    }

    passwordPage() {
        return require('./password'); 
    }

    
}
module.exports = new signPage();
