package com.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.appointment;
import com.demo.model.user;
import com.demo.service.userService;


@RestController
@CrossOrigin
@RequestMapping("/User")
public class UserController {
	
	@Autowired
	private userService uservice;
	
	@PostMapping("/Registration")
	public ResponseEntity<String> addUser(@RequestBody user u) {

			user ur = uservice.registration(u);
			
		if(ur!=null) {
			return ResponseEntity.ok("Registration Success");
		}
			return ResponseEntity.ok("Registration Failed");
	}
	
	@GetMapping("/Login")
	public ResponseEntity<String> LoginUser(@RequestParam String username,@RequestParam String password,@RequestParam String usertype) {
		user ul = uservice.validate(username,password,usertype);
		
		if(ul!=null) {
			return ResponseEntity.ok("Login Successful");
		}
			return ResponseEntity.ok("Login Failed");
	}
	
//	@GetMapping("/Search/{name}")
//	public ResponseEntity <appointment> Search(@PathVariable String name) {
//		appointment a = uservice.search(name);
//		return null;
//	}
}
