import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isError:boolean=false;
  constructor(private router:Router,private userService:UserService,private authService:AuthService) {
  
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    
    
    console.log(this.loginForm.value);
    this.userService.loginuser(this.loginForm.value.username,this.loginForm.value.password).subscribe(
      data=>{
      
          if(data.length==0){
            this.isError=true;
            this.loginForm.reset();
            setTimeout (() => {
              this.isError=false;
            }, 4000);
          }
          else{
            this.authService.setloggedIn();
            this.userService.setuserIdGloabal(data[0].id);
            this.userService.setusernameGloabal(data[0].firstname);
            this.router.navigate(['home']);
            
           
            
          }
        
      }
    )
  
  }
}
