import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { User, UserService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private routeSegment: RouteSegment
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserById(+this.routeSegment.getParam('id'));
  }



}
