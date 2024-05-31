package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.engineerDao;
import com.demo.model.Engineer;

@Service
public class engineerServiceImpl implements engineerService {

	@Autowired
	private engineerDao edao;
	
	@Override
	public Engineer addEngineer(Engineer e) {
		return edao.save(e);
	}

	@Override
	public Engineer validate(String userName, String password, String userType) {
		return edao.validate(userName,password,userType);
	}
	
	@Override
	public Engineer EnggInfo() {
		return edao.EnggInfo();
	}

	@Override
	public Engineer profile(String username) {
		return edao.profile(username);
	}
}
