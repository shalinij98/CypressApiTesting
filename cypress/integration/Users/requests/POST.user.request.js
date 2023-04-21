function createProduct(body) {
  return cy.request({
    url: '/api/users',
    method: 'POST',
    body: body
  })
}

export { createProduct }