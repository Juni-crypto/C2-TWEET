import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-your-tweets',
  templateUrl: './your-tweets.component.html',
  styleUrls: ['./your-tweets.component.css']
})
export class YourTweetsComponent implements OnInit {
  tweets:Tweet[];
  isLoading:boolean=true;
  isDeleted:boolean=false;
  isTweetsAvailable:boolean=true;
  constructor(private router:Router,private tweetService:TweetService) { }

  ngOnInit(): void {
    this.tweetService.getTweetsOfUser().subscribe(
      data=>{
        if(data.length==0){
          this.isLoading=false;
          this.isTweetsAvailable=false;
        }
        else{
          this.isLoading=false;
          this.tweets=data;
         // console.log(this.loans);
        }
      }
    )
  }

  onLike(id:number):void {
    this.tweetService.likeTweet(id).subscribe(data=>{
     this.tweetService.getTweetsOfUser().subscribe(
       data=>{
         this.tweets=data;
       }
     )
    })

}
  onDelete(id:number):void{
    this.tweetService.deleteTweetById(id).subscribe(
      data=>{
        this.isDeleted=true;
        this.tweetService.getTweetsOfUser().subscribe(
          data=>{
            if(data.length==0){
              this.isLoading=false;
              this.isTweetsAvailable=false;
            }
            else{
              this.isLoading=false;
              this.tweets=data;
             // console.log(this.loans);
            }
          }
        )
        setTimeout (() => {
          this.isDeleted=false;
        }, 5000);

      }
    )
  }

  onEdit(id:number):void{
    this.router.navigate(['edit-tweet',id]);
  }
}
