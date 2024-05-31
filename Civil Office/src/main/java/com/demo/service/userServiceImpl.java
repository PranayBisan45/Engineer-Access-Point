package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.userDao;
import com.demo.model.user;

@Service
public class userServiceImpl implements userService {

	@Autowired
	private userDao udao;
	
	@Override
	public user registration(user u) {
		return udao.save(u);
	}

	@Override
	public user validate(String uName, String password, String uType) {
		return udao.validate(uName,password,uType);
	}

	@Override
	public user forgotPassword(String username, String email) {
		return udao.forgotPassword(username,email);
	}

	@Override
	public Boolean newPassword(String password, String username) {
		int rowAffected =  udao.newPassword(password,username);
		if(rowAffected>0) {
			return true;
		}
			return false;
	}

	@Override
	public user profile(String username) {
		return udao.profile(username);
	}
}
