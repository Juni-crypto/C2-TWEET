package com.tweetapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.User;
import com.tweetapp.repository.TweetRepository;

@Service
public class TweetService {
	@Autowired
	private TweetRepository tweetRepository;
	
	
	public List<Tweet> getAllTweets(){
		return tweetRepository.findAll();
	}
	
	public void postTweet(Tweet tweet){
		tweetRepository.insert(tweet);
	}
	
	public void updateTweet(Tweet tweet) {
		tweetRepository.save(tweet);
	}
	
	public void deleteTweet(int id) {
		tweetRepository.deleteById(id);
	}
	
	public Tweet getById(int id) {
		return tweetRepository.findById(id).get();
	}
	
	public List<Tweet> getAllTweetsBYUser(int userId){
		return tweetRepository.findTweetByUserid(userId);
	}
	
	
}	

