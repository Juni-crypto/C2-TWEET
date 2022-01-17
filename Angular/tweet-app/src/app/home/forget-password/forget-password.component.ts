import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm:FormGroup;
  isError:boolean=false;
  isUserAuthenticated:boolean=false;
  passwordForm:FormGroup;
  isPasswordFormEnabled:boolean=false;
  user:User;
  isPasswordUpdated:boolean=false;
  constructor(private router:Router,private userService:UserService) {
  
   }

  ngOnInit() {
    this.forgetForm = new FormGroup({
      username: new FormControl(null,Validators.required),
   
    });
    this.passwordForm = new FormGroup({
      password: new FormControl(null,[Validators.required,Validators.minLength(7)])
   
    });
  }


  onSubmit(){
    console.log(this.forgetForm.value.username);
    this.user=this.forgetForm.value;
    this.userService.checkUserExists(this.forgetForm.value.username).subscribe(
      data=>{
        this.forgetForm.reset();
        console.log(data)
        if(data.length==0){
          this.isError=true;
         
          setTimeout (() => {
            this.isError=false;
          }, 4000);
        }
        else{
          this.isUserAuthenticated=true;
        
          this.isPasswordFormEnabled=true;
          setTimeout (() => {
            this.isUserAuthenticated=false;
          }, 4000);
        }
         
     
      }
    )

  }

  onPasswordSubmit(){
      this.user.password=this.passwordForm.value.password;
      this.userService.forgetPassword(this.user).subscribe(
        data=>{
          
          this.isPasswordUpdated=true;
        }
      )
  }
}
