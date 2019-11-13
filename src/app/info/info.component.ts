import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user'
import { USER } from '../mock-user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  //@Input() user: User;
  user : User;

  private bosta = 'coco mole';

  constructor(private userService: UserService) { }

  ngOnInit():void {
    this.getUser();
  }


  getUser(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
    //this.user = this.userService.getUser();
        
  }

 
}
