package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Engineer;
import com.demo.service.engineerService;

@RestController
@CrossOrigin
@RequestMapping("/Engineer")
public class EngineerController {
	
	@Autowired
	private engineerService eservice;
	
	@PostMapping("/Registration")
	public ResponseEntity <String> addEngineer(@RequestBody Engineer e) {
		Engineer eu = eservice.addEngineer(e);
		if(eu!=null) {
			return ResponseEntity.ok("Registration Successful");
		} else {
			return ResponseEntity.ok("Registration Failed");
		}
	}
	
	@GetMapping("/Login")
	public ResponseEntity<String> validate(@RequestParam String username,@RequestParam String password,@RequestParam String usertype) {
		Engineer el = eservice.validate(username,password,usertype);
		
		if(el!=null) {
			return ResponseEntity.ok("Login Successful");
		}
		return ResponseEntity.ok("Login Failed");
	}
	
	@GetMapping("/EngineerInfo")
	public ResponseEntity <Engineer> EnggInfo() {
		Engineer e = eservice.EnggInfo();
		if(e!=null) {
			return ResponseEntity.ok(e);
		}
			return ResponseEntity.ok(null);
	}
	
}