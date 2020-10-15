'use strict'

const { Given, When, Then } = require('@cucumber/cucumber');
const homePage = require('./../page/home.js');
const signPage = homePage.signUpPage();
const passwordPage = signPage.passwordPage();
const mainPage = passwordPage.mainPage();
const dashboardPage = mainPage.dashboardPage();

Given(/^I am in Main page$/, async function () {
    await homePage.navigateToTheHomePage();
});

// Then("click on "Choose your language" button And change language to "{string}"", async function (language) {
    Then(/^select language "(.*)" from the dropdown list$/, async function (language) {

    await homePage.pageIsLoaded();
    if (await homePage.firstVersion() === true) {
        await homePage.languageListFirst();
    } else {
        await homePage.languageListSecond();
    };
    await homePage.selectLanguage(language);
    });

Then(/^select currency "(.*)" from the dropdown list$/, async function (currency) {
    await homePage.pageIsLoaded();
    if (await homePage.firstVersion() === true ) {
        await homePage.currencyListFirst();
    } else {
        await homePage.currencyListSecond();
    };
    await homePage.selectCurrency(currency);
    
});

Given(/^I am in Sign Up page$/, async function () {
    await signPage.navigateToTheSignUpPage();
});

When(/^I enter valid user email$/, async function () {
    await signPage.enterEmail();
});

When(/^click on GET STARTED button$/, async function () {
    await passwordPage.getStarted();
});

When(/^I enter valid password$/, async function () {
    await passwordPage.enterPassword();
});

When(/^click on CREATE ACCOUNT button$/, async function () {
    mainPage.createAccount();
});

When(/^I click on MY DASHBOARD button in Main page under account menu$/, async function () {
    await mainPage.pageIsLoaded(); 
    if (await mainPage.firstVersion() === true ) {
        await dashboardPage.mainPageFirstVersion();
    } else {
        await dashboardPage.mainPageSecondVersion();
    };    
});

Then(/^correct value is prefilled in email verification placeholder in My Dashboard page$/, async function () { 
    await dashboardPage.assertEmail();
});


