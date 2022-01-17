import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-reply-tweet',
  templateUrl: './reply-tweet.component.html',
  styleUrls: ['./reply-tweet.component.css']
})
export class ReplyTweetComponent implements OnInit {

  editForm:FormGroup;
  tweet:String;
  isTweetReplied:boolean=false;
 
  tweetid:number;
  constructor(private route: ActivatedRoute,private tweetService:TweetService,private router:Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      reply: new FormControl(null,Validators.required),
     
    });
    this.route.params.subscribe((params: Params) => {
      const id= params['id'];
      this.tweetid=id;
      this.tweetService.getTweetById(id).subscribe(
        data=>{

          this.tweet=data.tweet;
      
        }
      )
      })
  }

  onSubmit(){
    // this.tweet=this.editForm.value;
    // this.tweet.id=this.tweetid;
    // console.log(this.tweet);
    // this.tweetService.updateTweet(this.tweet).subscribe(
    //   data=>{
    //     console.log("Tweet updated successfully");
    //     this.isTweetReplied=true;
    //   },
    //   error=>{
    //     console.log("something went wrong in editing Tweet");
    //   }
  //   )

    this.tweetService.replyTweet(this.tweetid,this.editForm.value.reply).subscribe(
      data=>{
        this.isTweetReplied=true;
      },
      error=>{
           console.log("something went wrong in replying  Tweet");
          }
    )
   }
}
