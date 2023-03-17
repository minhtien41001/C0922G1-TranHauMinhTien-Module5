
import {LoaiXe} from "./loai-xe";

export interface BenXe {
  id?: number,
  bienSoXe?: string,
  loaiXe?: LoaiXe,
  tenNhaXe?: string,
  diemDi?: string,
  diemDen?: string,
  soDienThoai?: string,
  email?: string,
  gioKhoiHanh?: string
}
