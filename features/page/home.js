'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const locationInput = "ss";
const languageImage = ".uc_language";
const languageImageSecond = ".bui-avatar__image";
const currencyImage = ".js-uc-currency";
const currencyImageSecond = "button[data-modal-id='currency-selection']";

class HomePage extends BasePage {
    async pageIsLoaded() {
        await driver.wait(until.elementLocated(By.id(locationInput)), 7000);
    }

    async firstVersion() {
        const checkElement = await driver.findElements(By.css(languageImage));
        if(checkElement.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    async languageListFirst() {
        await driver.findElement(By.css(languageImage)).click();
    }

    async languageListSecond() {
        await driver.findElement(By.css(languageImageSecond)).click();
    }

    async selectLanguage(language) {
        await driver.wait(until.elementLocated(By.partialLinkText(language)), 7000)
        .then(element => element.click());
    }

    async currencyListFirst() {
        await driver.wait(until.elementLocated(By.css(currencyImage)), 10000)
        .then(element => element.click());
    }

    async currencyListSecond() {
        await driver.wait(until.elementLocated(By.css(currencyImageSecond)), 10000)
        .then(element => element.click());
    }

    async selectCurrency(currency) {
        await driver.wait(until.elementLocated(By.partialLinkText(currency)), 10000)
        .then(element => element.click());
    }

    signUpPage() {
        return require('./sign');
    }
}

module.exports = new HomePage();