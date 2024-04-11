package com.demo.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class user {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	private String firstname;
	private String lastname;
	
	@Column(unique = true)
	private String email;
	
	private String usertype;
	private String dob;
	
	@Column(unique = true)
	private String username;
	
	private String password;
	private long mobile;
	private String address;
	private int zipcode;
	private String state;
	private String country;
	public user() {
		super();
	}
	public user(int uid, String firstname, String lastname, String email, String usertype, String dob, String username,
			String password, long mobile, String address, int zipcode, String state, String country) {
		super();
		this.uid = uid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.usertype = usertype;
		this.dob = dob;
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
		this.zipcode = zipcode;
		this.state = state;
		this.country = country;
	}
	
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "user [uid=" + uid + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", usertype=" + usertype + ", dob=" + dob + ", username=" + username + ", password=" + password
				+ ", mobile=" + mobile + ", address=" + address + ", zipcode=" + zipcode + ", state=" + state
				+ ", country=" + country + "]";
	}

	
	

	
	
}
