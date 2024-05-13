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
	@PutMapping("/Update/{aid}/{status}")
	public ResponseEntity<?> UpdateAppointment(@PathVariable int aid,@PathVariable String status) {
		boolean flag = aservice.update(aid,status);
		if(flag) {
			return ResponseEntity.ok(true);
		}
			return ResponseEntity.ok(false);
	}
	
	@Transactional
	@GetMapping("/GetAll")
	public ResponseEntity<List<appointment>> getAllAppointment(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String username = (String) session.getAttribute("username");
		String usertype = (String) session.getAttribute("usertype");
		
		System.out.println(username+"-----------");
		System.out.println(usertype+"-----------");
		
		if(usertype =="engineer") {
			List<appointment> list = aservice.getAll();
			
			if(list!=null) {
				return ResponseEntity.ok(list);
			}
		}
		
		if(usertype == "user") {
			List <appointment> list = aservice.getByUsername(username);
			
			if(list!=null) {
				return ResponseEntity.ok(list);
			}
		}
			return ResponseEntity.notFound().build();
	}
	
	
	
	
	
	
	
	
	
	
	@Transactional
	@GetMapping("/DummyData")
	public ResponseEntity<List<appointment>> dummyData() {
		List<appointment> list = aservice.getAll();
		
		if(list!=null) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
}
