import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock;

@Component({
  moduleId: module.id,
  selector: 'app-vk',
  templateUrl: 'vk.component.html',
  styleUrls: ['vk.component.css']
})
export class VkComponent implements OnInit {
  lock = new Auth0Lock('U0arJvZV9zn6HijIDFViuaOcnOUEb2qf', 'zaikin-andrew.eu.auth0.com');
  profile: {};

  constructor() {
    let storage = localStorage.getItem('profile');
    this.profile = storage? JSON.parse(storage): null;
  }

  ngOnInit() {
  }

  login() {
    this.lock.show( (err, profile, id_token) => {
      this.profile = profile;
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.profile = null;
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
