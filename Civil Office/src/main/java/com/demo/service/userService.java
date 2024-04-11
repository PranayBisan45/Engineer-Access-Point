package com.demo.service;


import com.demo.model.user;

public interface userService {

	user registration(user u);

	user validate(String getuserName, String password, String getuserType);


}
