package com.demo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.user;

@Repository
public interface userDao extends JpaRepository<user,Integer> {

	@Query(value = "SELECT * FROM user WHERE username = ?1 AND password = ?2 AND usertype = ?3", nativeQuery = true)
	user validate(String userName, String password, String userType);

}