import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { User, UserService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers;
  }

  removeUser(event, user: User){
    this.userService.remove(user).then( (users: User[]) => this.users = users);
  }

}
