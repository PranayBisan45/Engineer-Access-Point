package com.demo.controller;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.demo.model.user;
import com.demo.service.userService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@RestController
@CrossOrigin
@RequestMapping("/User")
public class UserController {
	
	String OTP;
	
	@Autowired
	private userService uservice;
	
	@Autowired
	JavaMailSender mailSender;
	
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
			return ResponseEntity.ok("Login Successful") ;
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
	}
	
	@GetMapping("/ForgotPassword")
	public ResponseEntity<Boolean> ForgotPassword(@RequestParam String username, @RequestParam String email) {
		user u = uservice.forgotPassword(username,email);
		System.out.println(u);
		if(u!=null) {
			return ResponseEntity.ok(true);
		}
			return ResponseEntity.ok(false);
	}
	
	@PostMapping("/Verify")
	public void Verify (@RequestBody String otp) {
		OTP = otp;
	}
	
	@PostMapping("/OTP")
    public ResponseEntity<Boolean> verifyOTP(@RequestBody String requestBody) {
        String receivedOtp = requestBody;
        if (OTP.equals(receivedOtp)) {
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }
	
	@PutMapping("/NewPassword/{password}/{username}")
	public ResponseEntity <?> newPassword(@PathVariable String password,@PathVariable String username) {
		Boolean flag = uservice.newPassword(password,username);
		if(flag) {
			return ResponseEntity.ok(true);
		}
			return ResponseEntity.ok(false);
	}
	
	@GetMapping("/Profile")
	public ResponseEntity <user> Profile(@RequestParam String username) {
		user u = uservice.profile(username);
		if(u!=null) {
			return ResponseEntity.ok(u);
		}
			return ResponseEntity.ok(null);
	}
	
	@GetMapping("/SendOTP")
	public void sendOTPEmail(@RequestParam String username,@RequestParam String email,@RequestParam String OTP)
	        throws UnsupportedEncodingException, MessagingException {
	    MimeMessage message = mailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("pranaybisan45.com", "EAP");
	    helper.setTo(email);
	     
	    String subject = "Here's your One Time Password (OTP)";
	     
	    String content = "<p>Hello " + username + "</p>"
	            + "<p>For security reason, you're required to use the following "
	            + "One Time Password to login:</p>"
	            + "<p><b>" + OTP + "</b></p>";
	     
	    helper.setSubject(subject);
	     
	    helper.setText(content, true);
	     
	    mailSender.send(message);      
	}
}
