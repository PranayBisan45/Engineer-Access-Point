package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Engineer;

@Repository
public interface engineerDao extends JpaRepository<Engineer,Integer> {

	@Query(value="SELECT * FROM engineer WHERE username=?1 AND password=?2 AND usertype=?3" ,nativeQuery=true)
	Engineer validate(String userName, String password, String userType);
	
	@Query(value = "SELECT * FROM Engineer", nativeQuery = true)
	Engineer EnggInfo();
}
