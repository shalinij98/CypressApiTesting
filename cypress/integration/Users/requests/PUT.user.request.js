function putUser(id,name,job) {
  return cy.request({
    url: `/api/users/${id}`,
    method: 'PUT',
    body: {
    name:name,
    job:job
    }
  })
}

export { putUser }



