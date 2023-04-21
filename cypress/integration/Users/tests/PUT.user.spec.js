/// <reference types="cypress" />

import * as POSTlogin from '../../Login/requests/POST.login.request'
import * as PUTprodutos from '../requests/PUT.user.request'
import * as POSTprodutos from '../requests/POST.user.request'
import * as PATCHprodutos from '../requests/PATCH.user.request'
import * as DELETEprodutos from '../requests/DELETE.user.request'

let user;
let name;
let id;
let job;
describe('PUT Usuarios', () => {
  before(() => {
    cy.task("createUser").then((object) => {
        user = object;
    });
  });

  beforeEach(() => {
   POSTprodutos.createProduct(user).as('response')
      cy.get('@response').then(response => {
        expect(response.status).to.be.equal(201)
         name=response.body.name
          job=response.body.job
          id=response.body.id
         console.log(response)
  });
   });

 it('Update  user', () => {

      PUTprodutos.putUser(id,name,job).should(updateUser => {
        expect(updateUser.status).to.eq(200);
      });

  });
   it('Patch  user', () => {

        PATCHprodutos.patchUser(id,name,job).should(patchUser => {
          expect(patchUser.status).to.eq(200);
        });

    });
     it('Delete  user', () => {

          DELETEprodutos.deleteUser(id).should(deletUser => {
            expect(deletUser.status).to.eq(204);
          });

      });
});
