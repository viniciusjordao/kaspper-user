import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user =  {
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

    
    console.log(user);
    return {user};
  }

  postUser(user: User[]){
    //console.log(user);
    return user;
  }

}