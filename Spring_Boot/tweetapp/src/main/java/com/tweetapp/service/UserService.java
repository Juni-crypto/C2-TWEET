package com.tweetapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.model.User;
import com.tweetapp.repository.UserRepository;




@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	
	public void signupUser(User user) {
		userRepository.insert(user);
	}
	
	public List<User> authenticateUser(String username,String password) {
		return userRepository.findUserByUsernameAndPassword(username, password);
		
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public void forgotPassword(User user){
		 userRepository.save(user);
	}
	
	public List<User> checkUserExists(String username){
		return userRepository.findUserByUsername(username);
	}
	
	public User getUserById(int id) {
		return userRepository.findById(id).get();
	}
}
