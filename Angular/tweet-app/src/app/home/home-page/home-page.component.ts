import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  tweets:Tweet[];
  isLoading:boolean=true;
  isTweetsAvailable:boolean=true;
  likes:number;
  constructor(private router:Router,private tweetService:TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets().subscribe(
      data=>{
        if(data.length==0){
          this.isLoading=false;
          this.isTweetsAvailable=false;
        }
        else{
          this.isLoading=false;
          this.tweets=data;
          console.log(this.tweets);
        }
      }
    )

  }
  onLike(id:number):void {
    this.tweetService.likeTweet(id).subscribe(data=>{
     this.tweetService.getAllTweets().subscribe(
       data=>{
         this.tweets=data;
         console.log(this.tweets[0]);
       }
     )
    })
  }

  onNewTweet(){
    this.router.navigate(['/add-tweet']);
  }
  onYourTweets(){
    this.router.navigate(['/your-tweets']);
  }
  onReply(id:number):void{
    this.router.navigate(['reply-tweet',id]);
  }
}
