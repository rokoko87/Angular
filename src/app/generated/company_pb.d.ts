// package: 
// file: company.proto

import * as jspb from "google-protobuf";

export class CompanyResponse extends jspb.Message {
  clearCompaniesList(): void;
  getCompaniesList(): Array<Company>;
  setCompaniesList(value: Array<Company>): void;
  addCompanies(value?: Company, index?: number): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyResponse): CompanyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyResponse;
  static deserializeBinaryFromReader(message: CompanyResponse, reader: jspb.BinaryReader): CompanyResponse;
}

export namespace CompanyResponse {
  export type AsObject = {
    companiesList: Array<Company.AsObject>,
  }
}

export class Company extends jspb.Message {
  getCompanyid(): number;
  setCompanyid(value: number): void;

  getNombre(): string;
  setNombre(value: string): void;

  getRutaacceso(): string;
  setRutaacceso(value: string): void;

  getSubdominioactivo(): boolean;
  setSubdominioactivo(value: boolean): void;

  getDominio(): string;
  setDominio(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getContacto(): string;
  setContacto(value: string): void;

  getCorreoelectronico(): string;
  setCorreoelectronico(value: string): void;

  getImagenid(): number;
  setImagenid(value: number): void;

  getImagenruta(): string;
  setImagenruta(value: string): void;

  getImagenmodalidadid(): number;
  setImagenmodalidadid(value: number): void;

  getImagenmodalidaddesc(): string;
  setImagenmodalidaddesc(value: string): void;

  getDescripcion(): string;
  setDescripcion(value: string): void;

  getDescripcioncorta(): string;
  setDescripcioncorta(value: string): void;

  getTipoactividadeconomicaid(): number;
  setTipoactividadeconomicaid(value: number): void;

  getTipoactividadeconomicadesc(): string;
  setTipoactividadeconomicadesc(value: string): void;

  getActividadeconomicaid(): number;
  setActividadeconomicaid(value: number): void;

  getActividadeconomicadesc(): string;
  setActividadeconomicadesc(value: string): void;

  getTipotamanoempresaid(): number;
  setTipotamanoempresaid(value: number): void;

  getTipotamanoempresadesc(): string;
  setTipotamanoempresadesc(value: string): void;

  getTipocapitalempresaid(): number;
  setTipocapitalempresaid(value: number): void;

  getTipocapitalempresadesc(): string;
  setTipocapitalempresadesc(value: string): void;

  getNivel(): string;
  setNivel(value: string): void;

  getFacebook(): string;
  setFacebook(value: string): void;

  getInstagram(): string;
  setInstagram(value: string): void;

  getTwitter(): string;
  setTwitter(value: string): void;

  getPinterest(): string;
  setPinterest(value: string): void;

  getLinkedin(): string;
  setLinkedin(value: string): void;

  getWeb(): string;
  setWeb(value: string): void;

  getWatsapp(): string;
  setWatsapp(value: string): void;

  getPlan(): number;
  setPlan(value: number): void;

  getPlanactivo(): boolean;
  setPlanactivo(value: boolean): void;

  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    companyid: number,
    nombre: string,
    rutaacceso: string,
    subdominioactivo: boolean,
    dominio: string,
    owner: string,
    contacto: string,
    correoelectronico: string,
    imagenid: number,
    imagenruta: string,
    imagenmodalidadid: number,
    imagenmodalidaddesc: string,
    descripcion: string,
    descripcioncorta: string,
    tipoactividadeconomicaid: number,
    tipoactividadeconomicadesc: string,
    actividadeconomicaid: number,
    actividadeconomicadesc: string,
    tipotamanoempresaid: number,
    tipotamanoempresadesc: string,
    tipocapitalempresaid: number,
    tipocapitalempresadesc: string,
    nivel: string,
    facebook: string,
    instagram: string,
    twitter: string,
    pinterest: string,
    linkedin: string,
    web: string,
    watsapp: string,
    plan: number,
    planactivo: boolean,
    status: boolean,
  }
}

export class FiltrosRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNombre(): string;
  setNombre(value: string): void;

  getRutaacceso(): string;
  setRutaacceso(value: string): void;

  getSubdominioactivo(): string;
  setSubdominioactivo(value: string): void;

  getDominio(): string;
  setDominio(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getContacto(): string;
  setContacto(value: string): void;

  getCorreoelectronico(): string;
  setCorreoelectronico(value: string): void;

  getImagenid(): number;
  setImagenid(value: number): void;

  getTipomodimagenid(): number;
  setTipomodimagenid(value: number): void;

  getDescripcioncorta(): string;
  setDescripcioncorta(value: string): void;

  getDescripcion(): string;
  setDescripcion(value: string): void;

  getTipoactividadeconomicaid(): number;
  setTipoactividadeconomicaid(value: number): void;

  getActividadeconomicaid(): number;
  setActividadeconomicaid(value: number): void;

  getTipotamanioempresaid(): number;
  setTipotamanioempresaid(value: number): void;

  getTipocapitalempresaid(): number;
  setTipocapitalempresaid(value: number): void;

  getNivel(): string;
  setNivel(value: string): void;

  getFacebook(): string;
  setFacebook(value: string): void;

  getInstagram(): string;
  setInstagram(value: string): void;

  getTwitter(): string;
  setTwitter(value: string): void;

  getPinterest(): string;
  setPinterest(value: string): void;

  getLinkedin(): string;
  setLinkedin(value: string): void;

  getWeb(): string;
  setWeb(value: string): void;

  getWatsapp(): string;
  setWatsapp(value: string): void;

  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FiltrosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FiltrosRequest): FiltrosRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FiltrosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FiltrosRequest;
  static deserializeBinaryFromReader(message: FiltrosRequest, reader: jspb.BinaryReader): FiltrosRequest;
}

export namespace FiltrosRequest {
  export type AsObject = {
    id: number,
    nombre: string,
    rutaacceso: string,
    subdominioactivo: string,
    dominio: string,
    owner: string,
    contacto: string,
    correoelectronico: string,
    imagenid: number,
    tipomodimagenid: number,
    descripcioncorta: string,
    descripcion: string,
    tipoactividadeconomicaid: number,
    actividadeconomicaid: number,
    tipotamanioempresaid: number,
    tipocapitalempresaid: number,
    nivel: string,
    facebook: string,
    instagram: string,
    twitter: string,
    pinterest: string,
    linkedin: string,
    web: string,
    watsapp: string,
    status: boolean,
  }
}

