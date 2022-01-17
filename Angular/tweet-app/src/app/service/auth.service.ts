import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;
  constructor() { }
  setloggedIn(){
    this.isLoggedIn=true;
  }
  setlogout(){
    this.isLoggedIn=false;
  }
  getisLoggedin(){
    return this.isLoggedIn;
  }
}
