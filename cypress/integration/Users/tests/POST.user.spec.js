/// <reference types="cypress" />

import * as POSTlogin from '../../Login/requests/POST.login.request'
import * as POSTprodutos from '../requests/POST.user.request'

describe('POST /produtos', () => {
  let token;
  let body;

  beforeEach(() => {
    cy.task("createUser").then((product) => {
      body = product
    })
  })

  it('Should insert a product', () => {
    POSTprodutos.createProduct(body).as('response')

    cy.get('@response').then(response => {
      expect(response.status).to.be.equal(201)
    })
  })
})
