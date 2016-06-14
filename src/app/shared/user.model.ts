export class User {
  
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string;

  constructor(obj: {}) {
    Object.assign(this, obj);
  }
  
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

