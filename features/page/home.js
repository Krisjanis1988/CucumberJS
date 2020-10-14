'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const locationInput = "ss";
const languageImage = ".uc_language";
const selectEnglish = ".lang_en-gb";
const languageImageSecond = ".bui-avatar__image";
const selectEnglishSecond = "English (UK)";
const currencyImage = ".js-uc-currency";
const selectCurrency = ".currency_USD";
const currencyImageSecond = "button[data-modal-id='currency-selection']";
const selectCurrencySecond = "U.S. dollar";



class HomePage extends BasePage {
    async pageIsLoaded() {
        await driver.wait(until.elementLocated(By.id(locationInput)), 7000);
    }

    async firstVersion() {
        var checkElement = await driver.findElements(By.css(languageImage));
        if(checkElement.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    async languageFirstVersion() {
        await driver.findElement(By.css(languageImage)).click();
        await driver.wait(until.elementLocated(By.css(selectEnglish)), 7000)
        .then(element => element.click());
    }

    async languageSecondVersion() {
        await driver.findElement(By.css(languageImageSecond)).click();
        await driver.wait(until.elementLocated(By.partialLinkText(selectEnglishSecond)), 7000)
        .then(element => element.click());
    }

    async currencyFirstVersion() {
        await driver.wait(until.elementLocated(By.css(currencyImage)), 10000)
        .then(element => element.click());
        await driver.wait(until.elementLocated(By.css(selectCurrency)), 10000)
        .then(element => element.click());
    }

    async currencySecondVersion() {
        await driver.wait(until.elementLocated(By.css(currencyImageSecond)), 10000)
        .then(element => element.click());
        await driver.wait(until.elementLocated(By.partialLinkText(selectCurrencySecond)), 10000)
        .then(element => element.click());
        
    }

    signUpPage() {
        return require('./sign');
    }
}

module.exports = new HomePage();