import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [ {
        id : 1,
        bairro: 'pead',
        cep: '',
        complemento: '',
        numero: 'canna canna',
        gia: '',
        localidade: '',
        logradouro: 'baseado real',
        uf: '',
        unidade: 'baselovers',
        cpf: '',
        telefone: '',
        email: '',
    }
  ];

    
    console.log(users[0]);
    return {users};
  }


  // genId(user : User): number {
  //   user => user.id
  //   return 1
  // }

  // postUser(user: User[]){
  //   //console.log(user);
  //   return user;
  // }

}