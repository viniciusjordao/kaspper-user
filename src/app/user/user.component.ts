import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
//import {MatDialog} from '@angular/material'

import { User } from '../user';

import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  users: User[]; 

  userForm = new FormGroup({
    id:new FormControl(1),
    bairro: new FormControl(''),
    cep: new FormControl(''),
    complemento: new FormControl(''),
    numero: new FormControl(''),
    localidade: new FormControl(''),
    logradouro: new FormControl(''),
    uf: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UserService) { }

    ngOnInit(): void  {
    this.getUser(); 
  }
  getUser(): void {
    
    this.userService.getUser()
      .subscribe(users => this.users = users);
    //this.user = this.userService.getUser();
        
  }
      

  // searchCep(term: string): void {
   
  //   if(term){
  //     console.log(term);
  //     this.userService.getUser(term)
  //     .subscribe(user => this.user = user);
  //   }
  // }
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo obrigatório' :
        this.email.hasError('email') ? 'Email inválido' :
            '';
  }

  onSubmit() : void {
    // TODO: Use EventEmitter with form value
    //console.warn(this.userForm.value);
    this.user = this.userForm.value;
    //console.warn(this.user);
    this.userService.saveUser(this.user)
    .subscribe();
  }


}