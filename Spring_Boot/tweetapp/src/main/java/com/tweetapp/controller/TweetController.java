package com.tweetapp.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.tweetapp.kafkaconfig.KafKaProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.User;
import com.tweetapp.service.SequenceGeneratorService;
import com.tweetapp.service.TweetService;
import com.tweetapp.service.UserService;

@RestController
@RequestMapping("/api/v1.0/tweetService")
public class TweetController {
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	@Autowired
	private TweetService tweetService;
	@Autowired
	private UserService userService;
	@Autowired
	private KafKaProducerService producerService;
	
	@GetMapping("/getAllTweets")
	public List<Tweet> getAllTweets(){
		return tweetService.getAllTweets();
	}
	
	@PostMapping("/add")
	public void postTweet(@RequestBody Tweet tweet) {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date(System.currentTimeMillis());
		User user=userService.getUserById(tweet.getUserid());
		tweet.setFirstname(user.getFirstname());
		tweet.setDate(date);
		tweet.setId(sequenceGeneratorService.getSequenceNumber(tweet.SEQUENCE_NAME));
		tweetService.postTweet(tweet);
		producerService.sendtweet(tweet.getTweet()+"by"+tweet.getFirstname());
	}
	
	@GetMapping("getTweetById")
	public Tweet getTweetById(@RequestParam int id){
		return tweetService.getById(id);
	}
	
	@PutMapping("/update")
	public void updateTweet(@RequestBody Tweet tweet) {
		Tweet newTweet=tweetService.getById(tweet.getId());
		tweet.setFirstname(newTweet.getFirstname());
		tweet.setDate(newTweet.getDate());
		tweet.setLikes(newTweet.getLikes());
		tweet.setReply(newTweet.getReply());
		tweetService.updateTweet(tweet);
	}
	
	@DeleteMapping("delete")
	public void deleteTweet(@RequestParam int id) {
		tweetService.deleteTweet(id);
	}
	
	@PutMapping("like")
	public void likeTweet(@RequestParam int id) {
		Tweet tweet=tweetService.getById(id);
		tweet.setLikes(tweet.getLikes()+1);
		tweetService.updateTweet(tweet);
	}
	
	@PutMapping("reply")
	public void replyTweet(@RequestParam int id,@RequestParam String reply) {
		Tweet tweet=tweetService.getById(id);
		List<String> replies=tweet.getReply();
		replies.add(reply);
		tweet.setReply(replies);
		tweetService.updateTweet(tweet);
	}
	
	@GetMapping("/getAllTweetsOfUser")
	public List<Tweet> getTweetsByUser(@RequestParam int userId){
		return tweetService.getAllTweetsBYUser(userId);
	}
}
