package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tweetapp.model.User;




@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
	List<User> findUserByUsernameAndPassword(String username,String password);
	List<User> findUserByUsername(String Username);
	
}
