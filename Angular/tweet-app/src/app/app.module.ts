import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AddTweetComponent } from './home/add-tweet/add-tweet.component';
import { YourTweetsComponent } from './home/your-tweets/your-tweets.component';
import { EditTweetComponent } from './home/edit-tweet/edit-tweet.component';
import { ForgetPasswordComponent } from './home/forget-password/forget-password.component';
import { ReplyTweetComponent } from './home/reply-tweet/reply-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    AddTweetComponent,
    YourTweetsComponent,
    EditTweetComponent,
    ForgetPasswordComponent,
    ReplyTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
