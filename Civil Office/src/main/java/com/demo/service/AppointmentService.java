package com.demo.service;

import java.util.List;

import com.demo.model.appointment;

public interface AppointmentService {

	appointment appointment(appointment a);

	boolean delete(int aid);

	boolean update(int aid, String status);

	List<appointment> getAll();
}
