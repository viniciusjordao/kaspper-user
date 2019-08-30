import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  resultado:Cep;
  constructor(private http:HttpClient) { }

  buscar(cep:string){
    return this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .map(data => this.resultado = this.converterRespostaParaCep(data));
  }
}
