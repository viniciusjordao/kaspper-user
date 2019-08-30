import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //cep  = new FormControl(cep);
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo obrigatório' :
        this.email.hasError('email') ? 'Email inválido' :
            '';
  }

  constructor() { }

  ngOnInit() {
    
  }
}