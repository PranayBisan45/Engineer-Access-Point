package com.demo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.user;

import jakarta.transaction.Transactional;

@Repository
public interface userDao extends JpaRepository<user,Integer> {

	@Query(value = "SELECT * FROM user WHERE username = ?1 AND password = ?2 AND usertype = ?3", nativeQuery = true)
	user validate(String userName, String password, String userType);

	@Query(value = "SELECT * FROM user WHERE username = ?1 AND email = ?2",nativeQuery = true)
	user forgotPassword(String username, String email);
	
	@Modifying
    @Transactional
	@Query(value = "UPDATE user SET password=?1 WHERE username=?2",nativeQuery = true)
	int newPassword(String password, String username);

	@Transactional
	@Query(value = "SELECT * FROM User WHERE username = ?1",nativeQuery = true)
	user profile(String username);

}