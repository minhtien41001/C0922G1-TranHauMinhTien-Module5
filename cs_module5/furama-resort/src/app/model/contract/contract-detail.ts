import {AttachFacility} from "./attach-facility";
import {Contract} from "./contract";

export interface ContractDetail {
  id?: number,
  name?: string,
  attachFacility?: AttachFacility,
  contract?: Contract
}
