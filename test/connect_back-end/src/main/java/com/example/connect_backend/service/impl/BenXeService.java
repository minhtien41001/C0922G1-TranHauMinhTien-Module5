package com.example.connect_backend.service.impl;

import com.example.connect_backend.dto.IBenXeDto;
import com.example.connect_backend.model.BenXe;
import com.example.connect_backend.repository.IBenXeRepository;
import com.example.connect_backend.service.IBenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenXeService implements IBenXeService {
    @Autowired
    private IBenXeRepository iBenXeRepository;


    @Override
    public List<BenXe> getAll() {
        return iBenXeRepository.getAll();
    }
}
