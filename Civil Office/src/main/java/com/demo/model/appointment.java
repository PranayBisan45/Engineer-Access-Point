package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Appointment")
public class appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int aid;
	private String username;
	private String name;
	private String number;
	private String date;
	private String purpose;
	private String status="Pending" ;  // Approved / Rejected / Pending
	
	public appointment() {
		super();
	}
	
	public appointment(int aid, String username, String name, String number, String date, String purpose, String status) {
		super();
		this.aid = aid;
		this.username = username;
		this.name = name;
		this.number = number;
		this.date = date;
		this.purpose = purpose;
		this.status = status;
	}

	public appointment(int aid, String username, String name, String number, String date, String purpose) {
		super();
		this.aid = aid;
		this.username = username;
		this.name = name;
		this.number = number;
		this.date = date;
		this.purpose = purpose;
	}
	
	
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPurpose() {
		return purpose;
	}
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getUsername() {
		return username;
	}
	public void getUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "appointment [aid=" + aid + ", username=" + username + ", name=" + name + ", number=" + number
				+ ", date=" + date + ", purpose=" + purpose + ", status=" + status + "]";
	}
}
