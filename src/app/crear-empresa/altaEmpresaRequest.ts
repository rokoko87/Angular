import { AltaEmpresa } from './alta_empresa';

export class AltaEmpresaRequest {
  companyId: number;
  user: string;
  information: AltaEmpresa;

  constructor(companyId: number, user: string, information: AltaEmpresa) {
    this.companyId = companyId;
    this.user = user;
    this.information = information;

  }


}
