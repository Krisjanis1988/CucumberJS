'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const createAccountButton = ".bui-button--wide";
const locationInput = "ss";
const PopUp = ".modal-mask-closeBtn";

class mainPage extends BasePage {
    async createAccount() {
        await driver.findElement(By.css(createAccountButton)).click();
    }

    async pageIsLoaded() {
        await driver.wait(until.elementLocated(By.id(locationInput)), 7000);
    }

    async firstVersion() {
        const checkElementIs = await driver.findElements(By.css(PopUp));
        if(checkElementIs.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    dashboardPage() {
        return require('./dashboard'); 
    }
}

module.exports = new mainPage();