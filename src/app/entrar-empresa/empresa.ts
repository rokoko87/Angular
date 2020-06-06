export class Empresa {
  id: number;
  nombre: string;
  owner: string;
  contacto: string;
  descripcion: string;
  tipoActividadEconomicaId: number;
  actividadEconomicaId: number;
  tipoTamanioEmpresaId: number;
  tipoCapitalEmpresaId: number;
  status: boolean;

  
  constructor(id: number, nombre: string, owner: string, contacto: string, descripcion: string, tipoActividadEconomicaId: number,
    actividadEconomicaId: number, tipoTamanioEmpresaId: number, tipoCapitalEmpresaId: number, status: boolean ) {
    this.id =  id;
    this.nombre = nombre;
    this.owner = owner;
    this.contacto = contacto;
    this.descripcion =  descripcion;
    this.tipoActividadEconomicaId = tipoActividadEconomicaId;
    this.actividadEconomicaId = actividadEconomicaId;
    this.tipoTamanioEmpresaId = tipoTamanioEmpresaId;
    this.tipoCapitalEmpresaId = tipoCapitalEmpresaId;
    this.status = status;
  }

  
  

}
