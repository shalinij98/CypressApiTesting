function patchUser(id,name,job) {
  return cy.request({
    url: `/api/users/${id}`,
    method: 'PATCH',
    body: {
    name:name,
    job:job
    }
  })
}

export { patchUser }



