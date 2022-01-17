import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {
  editForm:FormGroup;
  tweet:Tweet;
  isTweetEdited:boolean=false;
 
  tweetid:number;
  constructor(private route: ActivatedRoute,private tweetService:TweetService,private router:Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      tweet: new FormControl(null,Validators.required),
     
    });
    this.route.params.subscribe((params: Params) => {
      const id= params['id'];
      this.tweetid=id;
      this.tweetService.getTweetById(id).subscribe(
        data=>{
       //   console.log(data);
          this.editForm.setValue({
           tweet:data.tweet

          })
        }
      )
      })
  }

  onSubmit(){
    this.tweet=this.editForm.value;
    this.tweet.id=this.tweetid;
    console.log(this.tweet);
    this.tweetService.updateTweet(this.tweet).subscribe(
      data=>{
        console.log("Tweet updated successfully");
        this.isTweetEdited=true;
      },
      error=>{
        console.log("something went wrong in editing Tweet");
      }
    )

  }

}
