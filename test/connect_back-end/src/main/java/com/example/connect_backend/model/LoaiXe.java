package com.example.connect_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class LoaiXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String tenLoaiXe;

    @OneToMany(mappedBy = "loaiXe")
    private Set<BenXe> benXes;

    public LoaiXe() {
    }

    public LoaiXe(Integer id, String tenLoaiXe) {
        this.id = id;
        this.tenLoaiXe = tenLoaiXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenLoaiXe() {
        return tenLoaiXe;
    }

    public void setTenLoaiXe(String tenLoaiXe) {
        this.tenLoaiXe = tenLoaiXe;
    }
}
