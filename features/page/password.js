'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const password = "Testtest123";
const getStartedButton = ".bui-button--wide";
const passwordField = "password";
const confirmPasswordField = "confirmed_password";

class passwordPage extends BasePage {
    async getStarted() {
        await driver.findElement(By.css(getStartedButton)).click();
    }

    async enterPassword() {
        await driver.wait(until.elementLocated(By.id(passwordField)), 7000)
        .then(element => element.sendKeys(password));
        await driver.findElement(By.id(confirmPasswordField)).sendKeys(password); 
    }

    mainPage() {
        return require('./main'); 
    }

}

module.exports = new passwordPage();