package com.example.connect_backend.model;

import org.springframework.scheduling.support.SimpleTriggerContext;

import javax.persistence.*;

@Entity
public class BenXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String bienSoXe;

    @ManyToOne
    @JoinColumn(name = "loai_xe_id",referencedColumnName = "id")
    private LoaiXe loaiXe;

    private String tenNhaXe;

    private String diemDi;

    private String diemDen;

    private String soDienThoai;

    private String email;

    private String gioKhoiHanh;

    public BenXe() {
    }

    public BenXe(Integer id, String bienSoXe, LoaiXe loaiXe, String tenNhaXe, String diemDi, String diemDen, String soDienThoai, String email, String gioKhoiHanh) {
        this.id = id;
        this.bienSoXe = bienSoXe;
        this.loaiXe = loaiXe;
        this.tenNhaXe = tenNhaXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.gioKhoiHanh = gioKhoiHanh;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBienSoXe() {
        return bienSoXe;
    }

    public void setBienSoXe(String bienSoXe) {
        this.bienSoXe = bienSoXe;
    }

    public LoaiXe getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(LoaiXe loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioKhoiHanh() {
        return gioKhoiHanh;
    }

    public void setGioKhoiHanh(String gioKhoiHanh) {
        this.gioKhoiHanh = gioKhoiHanh;
    }
}
