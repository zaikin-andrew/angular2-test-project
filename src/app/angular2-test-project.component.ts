import { Component } from '@angular/core';
import { Routes, Route, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { UsersComponent } from './+users';
import { UserComponent } from './+user';
import { UserFormComponent } from './+user-form';
import { UserService } from './shared';


@Component({
  moduleId: module.id,
  selector: 'angular2-test-project-app',
  templateUrl: 'angular2-test-project.component.html',
  styleUrls: ['angular2-test-project.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, UserService ]
})

@Routes([
  new Route({path: '/users', component: UsersComponent}),
  new Route({path: '/user/:id', component: UserComponent}),
  new Route({path: '/add/user', component: UserFormComponent}),
  new Route({path: '/edit/user/:id', component: UserFormComponent})
])

export class Angular2TestProjectAppComponent {

  constructor(private router: Router){
    router.navigate(['/users']);
  }
}
