import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tweet } from 'src/app/model/tweet';
import { TweetService } from 'src/app/service/tweet.service';
@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {
  addForm:FormGroup;
  tweet:Tweet;
  isTweetAdded:boolean=false;
  constructor(private tweetService:TweetService) { }
 
  ngOnInit(): void {
    this.addForm = new FormGroup({
      tweet: new FormControl(null,Validators.required),
     
    });
  }

  onSubmit(){
    this.tweet=this.addForm.value;
    this.addForm.reset();
    // console.log(this.loan);
     this.tweetService.addTweet(this.tweet).subscribe(
       data=>{
         console.log("Tweet added successfully");
         this.isTweetAdded=true;
       
       },
       error=>{
         console.log("something went wrong in adding loan");
       }
     )
  }
}
