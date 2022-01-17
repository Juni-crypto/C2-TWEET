import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
  }
  signOut(){
    this.authService. setlogout();
    
    this.router.navigate(['login']);
  }
  authenticated(){
    return this.authService.isLoggedIn;
  }
  getUserName(){
    return this.userService.getusernameGlobal();
  }

}
