package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.model.appointment;
import com.demo.dao.AppointmentDao;

@Service
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentDao adao;
	
	@Override
	public appointment appointment(appointment a) {
		return adao.save(a);
	}

	@Override
	public boolean delete(int aid) {
		 int AffectedRow = adao.delete(aid);
		 if(AffectedRow>0) {
			 return true;
		 }
		 return false;
	}

	@Override
	public boolean update(appointment a) {
		int rowAffected = adao.update(a.getAid(),a.getName(),a.getUsername(),a.getNumber(),a.getDate(),a.getPurpose());
		if(rowAffected >0) {
			return true;
		}
			return false;
	}

	@Override
	public List<appointment> getAll() {
		return adao.getAll();
	}

	@Override
	public List<appointment> getByUsername(String username) {
		return adao.getByUsername(username);
	}

}
