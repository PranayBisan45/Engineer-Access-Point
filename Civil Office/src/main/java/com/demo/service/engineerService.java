package com.demo.service;

import com.demo.model.Engineer;

public interface engineerService {

	Engineer addEngineer(Engineer e);

	Engineer validate(String userName, String password, String userType);

	Engineer EnggInfo();
}
