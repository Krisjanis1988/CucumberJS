const { Given, When, Then } = require('@cucumber/cucumber');
var homePage = require('./../page/home.js');
var signPage = homePage.signUpPage();
var passwordPage = signPage.passwordPage();
var mainPage = passwordPage.mainPage();
var dashboardPage = mainPage.dashboardPage();

Given(/^I am in Main page$/, async function () {
    await homePage.navigateToTheHomePage();
});

Then(/^click on "Choose your language" button And change language to "English UK"$/, async function () {
    await homePage.pageIsLoaded();
    if (await homePage.firstVersion() === true) {
        await homePage.languageFirstVersion();
    } else {
        await homePage.languageSecondVersion();
    };
    });

Then(/^click on "Choose your currency" button And change currency to "U.S. dollar"$/, async function () {
    await homePage.pageIsLoaded();
    if (await homePage.firstVersion() === true ) {
        await homePage.currencyFirstVersion();
    } else {
        await homePage.currencySecondVersion();
    };
    
});

Given(/^I am in Sign Up page$/, async function () {
    await signPage.navigateToTheSignUpPage();
});

When(/^I enter valid user email$/, async function () {
    await signPage.enterEmail();
});

When(/^click on "GET STARTED" button$/, async function () {
    await passwordPage.getStarted();
});

When(/^I enter valid password$/, async function () {
    await passwordPage.enterPassword();
});

When(/^click on "Create Account" button And main page is opened$/, async function () {
    mainPage.createAccount();
});

When(/^I click on "My Dashboard" button under account menu$/, async function () {
    await mainPage.pageIsLoaded(); 
    if (await mainPage.firstVersion() === true ) {
        await dashboardPage.mainPageFirstVersion();
    } else {
        await dashboardPage.mainPageSecondVersion();
    };    
});

Then(/^"My Dashboard" page is opened And correct value is prefilled in email verification placeholder$/, async function () { 
    await dashboardPage.assertEmail();
});


