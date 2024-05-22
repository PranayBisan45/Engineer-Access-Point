package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.appointment;
import com.demo.service.AppointmentService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;

@RestController
@CrossOrigin
@RequestMapping("/Appointment")
public class AppointmentController {
	
	@Autowired
	private AppointmentService aservice;
	
	@PostMapping("/Add")
	public ResponseEntity <String> AddAppointment(@RequestBody appointment a) {
		appointment aa = aservice.appointment(a);
		
		if(aa!=null) {
			return ResponseEntity.ok("Appointment Requested");
		}
		return ResponseEntity.ok("There is an issue");
	}
	
	@Transactional
	@DeleteMapping("/Delete/{aid}")
	public ResponseEntity<?> DeleteAppointment(@PathVariable int aid) {
		boolean flag = aservice.delete(aid);
		if(flag) {
			return ResponseEntity.ok("Successfully deleted");
		}
		return ResponseEntity.ok("Unsuccessful");
	}
	
	@Transactional
	@PostMapping("/Update")
	public ResponseEntity<?> UpdateAppointment(@RequestBody appointment a) {
		boolean flag = aservice.update(a);
		if(flag) {
			return ResponseEntity.ok(true);
		}
			return ResponseEntity.ok(false);
	}
	
	@Transactional
	@GetMapping("/GetAll/{username}/{usertype}")
	public ResponseEntity<List<appointment>> getAllAppointment(@PathVariable String username,@PathVariable String usertype) {

		if(usertype.equals("engineer")) {
			List<appointment> list = aservice.getAll();
			
			if(list!=null) {
				return ResponseEntity.ok(list);
			}
		}
		
		if(usertype.equals("user")) {
			List <appointment> list = aservice.getByUsername(username);
			if(list!=null) {
				return ResponseEntity.ok(list);
			}
		}
			return ResponseEntity.notFound().build();
	}
}
