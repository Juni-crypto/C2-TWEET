import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTweetComponent } from './home/add-tweet/add-tweet.component';
import { EditTweetComponent } from './home/edit-tweet/edit-tweet.component';
import { ForgetPasswordComponent } from './home/forget-password/forget-password.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
import { ReplyTweetComponent } from './home/reply-tweet/reply-tweet.component';
import { SignupComponent } from './home/signup/signup.component';
import { YourTweetsComponent } from './home/your-tweets/your-tweets.component';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'forget-password', component:ForgetPasswordComponent},
  {path: 'home',component:HomePageComponent,canActivate:[AuthGuard]},
  {path: 'add-tweet',component:AddTweetComponent,canActivate:[AuthGuard]},
  {path: 'your-tweets',component:YourTweetsComponent,canActivate:[AuthGuard]},
  {path: 'edit-tweet', component: LoginComponent},
  {path: 'reply-tweet',component:LoginComponent},
  {path: 'reply-tweet/:id',component:ReplyTweetComponent,canActivate:[AuthGuard]},
  {path: 'edit-tweet/:id',component:EditTweetComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
