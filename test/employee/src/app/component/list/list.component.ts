import { Component, OnInit } from '@angular/core';
import {BenXe} from "../../model/ben-xe";
import {Router} from "@angular/router";
import {BenxeService} from "../../service/benxe.service";
import {LoaiXe} from "../../model/loai-xe";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benxeList: BenXe[] = [];

  loaiXeList: LoaiXe[] = [];

  temp: BenXe = {
    id: 0
  }
  p: number = 0;

  constructor(private benxeService: BenxeService,
              private router: Router) {
    this.getAll();
    this.getAllLoaiXe();
    // this.getAllDiemden();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.benxeService.getAll().subscribe(data => {
      this.benxeList = data
    })
  }

  getAllLoaiXe() {
    this.benxeService.getAllLoaiXe().subscribe(data => {
      this.loaiXeList = data
    })
  }

  // getAllDiemden() {
  //   this.benxeService.getAllDiemden().subscribe(data => {
  //     this.diemdenList = data
  //   })
  // }

  deletebenxe(){
    if (this.temp != null){
      this.benxeService.deleteBenxe(this.temp.id).subscribe(data => {
        this.getAll();
        alert("xoa thanh cong")
      })
    }
  }
}




















