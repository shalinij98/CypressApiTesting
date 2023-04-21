function deleteUser(id) {
  return cy.request({
    url: `/api/users/${id}`,
    method: 'DELETE',
  })
}

export { deleteUser }



