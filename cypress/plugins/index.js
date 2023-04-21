/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require("faker");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {

    createUser() {
      product = {
        nome: faker.name.firstName(),
        job: faker.name.jobTitle(),
        id: faker.commerce.productDescription(),
        createdAt: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString()
      };
      return product;
    }
  })
  allureWriter(on, config);
  return config
}