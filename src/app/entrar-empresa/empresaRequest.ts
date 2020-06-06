import { Empresa } from './empresa';

export class EmpresaRequest {
  companyId: number;
  user: string;
  information: Empresa;
  
  constructor(companyId: number, user: string, information: Empresa) {
    this.companyId = companyId;
    this.user = user;
    this.information = information;

  }
    

}
