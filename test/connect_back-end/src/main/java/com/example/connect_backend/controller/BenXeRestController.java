package com.example.connect_backend.controller;

import com.example.connect_backend.dto.IBenXeDto;
import com.example.connect_backend.model.BenXe;
import com.example.connect_backend.service.IBenXeService;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ben-xe")
@CrossOrigin("*")
public class BenXeRestController {
@Autowired
    private IBenXeService iBenXeService;

    @GetMapping("/list-xe")
    public ResponseEntity<List<BenXe>> getAllBenXe(){
        List<BenXe> iBenXeDtos = iBenXeService.getAll();
        if(iBenXeDtos.isEmpty()){
            return new ResponseEntity<>(iBenXeDtos, HttpStatus.NO_CONTENT);
        } return new ResponseEntity<>(iBenXeDtos,HttpStatus.OK);
    }
}
