'use strict'

const seleniumWebdriver= require('selenium-webdriver'); 
const assert = require('assert');
const BasePage = require('./base');
const By = seleniumWebdriver.By;
const until = seleniumWebdriver.until;
const PopUp = ".modal-mask-closeBtn";
const currentAccount = "current_account";
const myDashboard = ".profile_menu__item--mydashboard";
const currentAccountSecond = ".bui-avatar--text";
const manageAccount = "Manage account";
const myDashboardSecond = 'a[data-trackname="Dashboard"]';
const emailField = ".email-confirm-banner__email-text";
const getEmailFieldValue = "value";


class dashboardPage extends BasePage {
    async mainPageFirstVersion() {
        await driver.findElement(By.css(PopUp)).click();
        await driver.findElement(By.id(currentAccount)).click();
        await driver.findElement(By.css(myDashboard)).click();
    }

    async mainPageSecondVersion() {
        await driver.findElement(By.css(currentAccountSecond)).click();
        await driver.findElement(By.linkText(manageAccount)).click();
        await driver.wait(until.elementLocated(By.css(myDashboardSecond)), 10000)
        .then(element => element.click());
    }

    async assertEmail() {
        const confirmEmail = await driver.wait(until.elementLocated(By.css(emailField)), 10000)
        .then(element => element.getAttribute(getEmailFieldValue));
        assert.strictEqual(confirmEmail, username);
    }
}

module.exports = new dashboardPage();