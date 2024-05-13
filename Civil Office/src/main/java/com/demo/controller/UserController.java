package com.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


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
	public ResponseEntity<String> LoginUser(@RequestParam String username,@RequestParam String password,@RequestParam String usertype, HttpServletRequest request) {
		user ul = uservice.validate(username,password,usertype);
		
		if(ul!=null) {
			HttpSession session = request.getSession(true);
			session.setAttribute("username",username);
			session.setAttribute("usertype",usertype);
			
//			String user1 = (String) session.getAttribute("username");
//			System.out.println(user1+"????????????");
			
			
			return ResponseEntity.ok("Login Successful") ;
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
	}
	
//	@GetMapping("/Search/{name}")
//	public ResponseEntity <appointment> Search(@PathVariable String name) {
//		appointment a = uservice.search(name);
//		return null;
//	}
}
