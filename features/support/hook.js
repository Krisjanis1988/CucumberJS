'use strict'

const {After} = require('@cucumber/cucumber');

const {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

After(function () {
    return driver.quit();
  })



