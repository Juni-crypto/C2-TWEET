package com.tweetapp.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

@Document("tweets")
public class Tweet {
	
	@Transient
	public static final String SEQUENCE_NAME="tweet_sequence";
	@Id
	public int id;
	public int userid;
	public String tweet;
	@JsonFormat(pattern="yyyy-MM-dd hh:mm:ss")
	public Date date;
	
	public List<String> reply=new ArrayList();
	public String firstname;
	public int likes;
	public Tweet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Tweet(int id, int userid, String tweet, Date date, List<String> reply, String firstname, int likes) {
		super();
		this.id = id;
		this.userid = userid;
		this.tweet = tweet;
		this.date = date;
		this.reply = reply;
		this.firstname = firstname;
		this.likes = likes;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getTweet() {
		return tweet;
	}
	public void setTweet(String tweet) {
		this.tweet = tweet;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public List<String> getReply() {
		return reply;
	}
	public void setReply(List<String> reply) {
		this.reply = reply;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	@Override
	public String toString() {
		return "Tweet [id=" + id + ", userid=" + userid + ", tweet=" + tweet + ", date=" + date + ", reply=" + reply
				+ ", firstname=" + firstname + ", likes=" + likes + "]";
	}
	
	
}
