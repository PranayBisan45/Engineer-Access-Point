package com.demo.service;

import java.util.List;
import com.demo.model.appointment;

public interface AppointmentService {

	appointment appointment(appointment a);

	boolean delete(int aid);

	boolean updateUser(appointment a);
	
	boolean updateAdmin(appointment a);

	List<appointment> getAll();

	List<appointment> getByUsername(String username);

}
