import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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

  constructor(private userService: UserService) { }

    ngOnInit(): void  {
    this.getUser(); 
  }

  searchCep(term: string): void {
   
    if(term){
      console.log(term);
      this.userService.getUser(term)
      .subscribe(user => this.user = user);
    }
  }

  getUser(): void {


  }
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo obrigatório' :
        this.email.hasError('email') ? 'Email inválido' :
            '';
  }
}