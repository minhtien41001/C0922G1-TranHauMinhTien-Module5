// import { Component, OnInit } from '@angular/core';
// import {Diemdi} from "../../model/diemdi";
// import {Diemden} from "../../model/diemden";
// import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {BenxeService} from "../../service/benxe.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
//   diemdiList: Diemdi[] = [];
//
//   diemdenList: Diemden[] = [];
//
//   formUpdateBenxe: FormGroup;
//
//     public compareWith(object1: Diemdi, object2: Diemdi): boolean {
//     return object1 && object2 ? object1.id === object2.id : object1 === object2;
//   }
//
//   public compareWith1(object1: Diemden, object2: Diemden): boolean {
//     return object1 && object2 ? object1.id === object2.id : object1 === object2;
//   }
//   constructor(private benxeService: BenxeService,
//               private activatedRoute: ActivatedRoute,
//               private router: Router) {
//       this.formUpdateBenxe = new FormGroup({
//         id: new FormControl(),
//         bsx: new FormControl("",[Validators.required]),
//         loaiXe: new FormControl("", [Validators.required]),
//         tenNhaXe: new FormControl("",[Validators.required]),
//         diemDi: new FormControl("",[Validators.required]),
//         diemDen: new FormControl("",[Validators.required]),
//         sdt: new FormControl("",[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)]),
//         email: new FormControl("",[Validators.required,Validators.email]),
//         gioKhoiHanh: new FormControl("",[Validators.required]),
//       });
//       this.activatedRoute.paramMap.subscribe(data =>{
//         const id = data.get("id")
//         if(id !=null){
//           this.getBenxe(+id)
//         }
//       })
//   }
//
//   ngOnInit(): void {
//       this.benxeService.getAllDiemdi().subscribe(data =>{
//         this.diemdiList = data;
//       })
//       this.benxeService.getAllDiemden().subscribe(data =>{
//         this.diemdenList = data;
//       })
//   }
//
//   private getBenxe(id: number) {
//     this.benxeService.findById(id).subscribe(data =>{
//       this.formUpdateBenxe.patchValue(data)
//     })
//   }
//
//   submit() {
//       // if (this.formUpdateBenxe.valid) return;
//   const benxe = this.formUpdateBenxe.value;
//   this.benxeService.updateStudent(benxe.id, benxe).subscribe(data => {
//     this.router.navigate(['']);
//     alert('Update success');
//   });
// }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
