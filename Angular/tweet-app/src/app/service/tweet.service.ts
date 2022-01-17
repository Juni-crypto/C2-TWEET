import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor( private httpClient: HttpClient,private userService:UserService) { }

  getAllTweets():Observable<Tweet[]>{
     return this.httpClient.get<Tweet[]>('http://localhost:8087/api/v1.0/tweetService/getAllTweets');
  }

  likeTweet(id:number):Observable<void>{
    return this.httpClient.put<void>('http://localhost:8087/api/v1.0/tweetService/like?id='+id,null);
  }

  getTweetsOfUser():Observable<Tweet[]>{
    return this.httpClient.get<Tweet[]>('http://localhost:8087/api/v1.0/tweetService/getAllTweetsOfUser?userId='+this.userService.getuserIdGlobal());
  }

  deleteTweetById(id:number):Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8087/api/v1.0/tweetService/delete?id='+id);
  }

  addTweet(tweet:Tweet):Observable<void>{
    tweet.userid=this.userService.getuserIdGlobal();
    return this.httpClient.post<void>('http://localhost:8087/api/v1.0/tweetService/add',tweet);
  }

  getTweetById(id:number):Observable<Tweet>{
    return this.httpClient.get<Tweet>('http://localhost:8087/api/v1.0/tweetService/getTweetById?id='+id);
  }

  updateTweet(tweet:Tweet):Observable<void>{
    tweet.userid=this.userService.getuserIdGlobal();
    return this.httpClient.put<void>('http://localhost:8087/api/v1.0/tweetService/update',tweet);
  }

  replyTweet(id:number,reply:String):Observable<void>{
    return this.httpClient.put<void>('http://localhost:8087/api/v1.0/tweetService/reply?id='+id+'&&reply='+reply,null);
  }
}
