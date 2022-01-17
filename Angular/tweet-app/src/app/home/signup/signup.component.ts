import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  user:User;
  isUserInValid:boolean=false;
  isUserAdded:boolean=false;
  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
     
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      password: new FormControl(null,[Validators.required,Validators.minLength(7)]),
      username: new FormControl(null,Validators.required),
      gender: new FormControl(null,Validators.required),
      contactnumber: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')])
     
    });
  }


  onSubmit(){
   console.log(this.signupForm.value);
   this.user=this.signupForm.value;
   this.UserService.checkUserExists(this.signupForm.value.username).subscribe(
     data=>{
       if(data.length==0){
        this.UserService.signupUser(this.user).subscribe(
          data=>{
            this.isUserAdded=true;
            console.log("signup success");
          }
        )
       }else{
         this.isUserInValid=true;
         this.signupForm.reset();
          setTimeout (() => {
           this.isUserInValid=false;
         }, 4000);
       }
     }
   )
  

  }
}
