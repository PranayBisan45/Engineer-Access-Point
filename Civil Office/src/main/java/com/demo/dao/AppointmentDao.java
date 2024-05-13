package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.appointment;

import jakarta.transaction.Transactional;

@Repository
public interface AppointmentDao extends JpaRepository<appointment,Integer>{

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM Appointment WHERE aid = ?1", nativeQuery = true)
	int delete(int aid);

	@Modifying
	@Query(value = "UPDATE Appointment SET status=?2 WHERE aid=?1",nativeQuery=true)
	int update(int aid, String status);

	@Modifying
	@Query(value = "SELECT * FROM Appointment",nativeQuery=true)
	List<appointment> getAll();

	@Modifying
	@Query(value = "SELECT * FROM Appointment WHERE username=?",nativeQuery=true)
	List<appointment> getByUsername(String username);
}
