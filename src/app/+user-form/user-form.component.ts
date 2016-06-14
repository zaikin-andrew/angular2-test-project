import { Component, OnInit } from '@angular/core';
import { NgForm, NgClass }    from '@angular/common';
import { RouteSegment, Router } from '@angular/router';

import { UserService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
  directives: [ NgClass ]
})
export class UserFormComponent implements OnInit {
  constructor(
    private userService: UserService,
    private routeSegment: RouteSegment,
    private router: Router
  ) {}

  model = this.userService.getUserById(+this.routeSegment.getParam('id')) || {};

  genders: String[] = [
    'male',
    'female'
  ];

  ngOnInit() {
  }

  onSubmit(){
    this.userService.save(this.model)
      .then(user => this.router.navigate(['/users']))
      .catch(error => console.error(error.message));
  }

  reset() {
    this.model = {};
  }

}
