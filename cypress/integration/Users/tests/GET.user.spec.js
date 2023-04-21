/// <reference types="cypress" />

import * as POSTlogin from '../../Login/requests/POST.login.request'

import * as GETprodutos from '../requests/GET.user.request'


describe('GET Usuarios', () => {


 it('GET  user', () => {

      GETprodutos.getUser(2).should(findUser => {
        expect(findUser.status).to.eq(200);
      });

  });

});
