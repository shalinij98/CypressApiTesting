 const payloadAddUser = require('../payloads/login_user.json');
function login() {
  return cy.request({
    method: 'POST',
    url: '/api/login',
    body: payloadAddUser
  })
}

export { login }

