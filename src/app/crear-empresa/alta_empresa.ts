export class AltaEmpresa {

  empresaNombre: string;
  empresaOwner: string;
  empresaDescripcionCorta: string;
  empresaDescripcion: string;

  plan: string;

  password1: string;
  password2: string;
  email1: string;
  email2: string;

  empresaContacto: string;
  empresaCorreoElectronico: string;



  personaNombrePrimero: string;
  personaNombreSegundo: string;
  personaApellidoPrimero: string;
  personaApellidoSegundo: string;


  personaGeneroId: number;
  personaTelCelular: string;
  personaTelCasa: string;


  empresaTipoActividadEconomicaId: number;
  empresaActividadEconomicaId: number;
  empresaTipoTamanioId: number;
  empresaTipoCapitalId: number;





  constructor(
    empresaNombre: string,
    empresaOwner: string,
    empresaDescripcionCorta: string,
    empresaDescripcion: string,

    plan: string,

    password: string,
    email: string,


    empresaContacto: string,
    empresaCorreoElectronico: string,

    personaNombrePrimero: string,
    personaNombreSegundo: string,
    personaApellidoPrimero: string,
    personaApellidoSegundo: string,

    personaGeneroId: number,
    personaTelCelular: string,
    personaTelCasa: string,

    empresaTipoActividadEconomicaId: number,
    empresaActividadEconomicaId: number,
    empresaTipoTamanioId: number,
    empresaTipoCapitalId: number


  ) {
    this.empresaNombre = empresaNombre;
    this.empresaOwner = empresaOwner;
    this.empresaDescripcionCorta = empresaDescripcionCorta;
    this.empresaDescripcion = empresaDescripcion;

    this.plan = plan;

    this.password1 = password;
    this.password2 = password;
    this.email1 = email;
    this.email2 = email;

    this.empresaContacto = empresaContacto;
    this.empresaCorreoElectronico = empresaCorreoElectronico;



    this.personaNombrePrimero = personaNombrePrimero;
    this.personaNombreSegundo = personaNombreSegundo;
    this.personaApellidoPrimero = personaApellidoPrimero;
    this.personaApellidoSegundo = personaApellidoSegundo;


    this.personaGeneroId = personaGeneroId;
    this.personaTelCelular = personaTelCelular;
    this.personaTelCasa = personaTelCasa;


    this.empresaTipoActividadEconomicaId = empresaTipoActividadEconomicaId;
    this.empresaActividadEconomicaId = empresaActividadEconomicaId;
    this.empresaTipoTamanioId = empresaTipoTamanioId;
    this.empresaTipoCapitalId = empresaTipoCapitalId;
  }




}
