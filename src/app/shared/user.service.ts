import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    let lsUsers = window.localStorage.getItem('users');
    this.users = lsUsers? JSON.parse(lsUsers).map(user => new User(user)):[];
  }

  getUserById(id: number){
    return this.users.find((user: User) => user.id == id);
  }

  get getUsers() {
    return this.users;
  }

  save(user): Promise<any> {
    return new Promise(resolve => {
      if(!user.id) {
        user.id = this.users.length? this.users[this.users.length - 1].id + 1: 1;
        user = new User(user);
      }
      this.addUserToUsers(user);
      resolve(user);
    });
  }

  remove(user: User): Promise<any> {
    return new Promise(resolve => {
      this.removeUserFromUsers(user);
      resolve(this.users);
    });
  }

  private addUserToUsers(user: User) {
    let index = this.users.findIndex((item: {id: number}) => item.id == user.id);

    if(index != -1) this.users[index] = user;
    else this.users.push(user);

    window.localStorage.setItem('users', JSON.stringify(this.users));
  }

  private removeUserFromUsers(user: User) {
    let index = this.users.findIndex((item: {id: number}) => item.id == user.id);

    this.users.splice(index, 1);
    window.localStorage.setItem('users', JSON.stringify(this.users));
  }

}
