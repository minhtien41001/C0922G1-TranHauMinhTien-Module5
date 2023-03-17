package com.example.connect_backend.repository;

import com.example.connect_backend.dto.IBenXeDto;
import com.example.connect_backend.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface IBenXeRepository extends JpaRepository<BenXe,Integer> {
    @Query(value = "select * from ben_xe",nativeQuery = true)
    List<BenXe> getAll( );

//    @Query(value = "insert into ben_xe values(:bienSoXe,:diemDen,:diemDi,:email,:gioKhoiHanh,:soDienThoai,:tenNhaXe,:loaiXe)",nativeQuery = true)
//    void createBenXe(@Param("bienSoXe") String bienSoXe,@Param("diemDen")String diemDen,@Param("diemDi") String diemDi,@Param("email") String email,@Param("gioKhoiHanh") String gioKhoiHanh,@Param("soDienThoai") String soDienThoai,@Param("tenNhaXe") String tenNhaXe,@Param("loaiXe")String loaiXe);



}
