import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login() {
    return Promise.resolve(
      {
        'turmas':[
          {
            descricao:'1º Mod em INFO',
            curso:'Informática para Internet',
            avls_pendentes:5
          },
          {
            descricao:'1º Ano em AGRO',
            curso:'Integrado em AGRO',
            avls_pendentes:10
          }
        ]
      }
    )
  }

}
