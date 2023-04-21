function getUser(id) {
  return cy.request({
    url: `/api/users/${id}`,
    method: 'GET',
  })
}

export { getUser }



