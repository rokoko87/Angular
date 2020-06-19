import { Component, OnInit } from '@angular/core';
import { EmpresaResult } from './empresaResult';
import { CompanyServiceREST } from '../company.service';
import { FiltrosRequest } from '../generated/company_pb';
import { CompanyService } from '../generated/company_pb_service';
import {grpc} from "@improbable-eng/grpc-web";

@Component({
  selector: 'app-entrar-empresa',
  templateUrl: './entrar-empresa.component.html',
  styleUrls: ['./entrar-empresa.component.css']
})
export class EntrarEmpresaComponent implements OnInit {

  empresas: EmpresaResult[] = [];


  constructor(private companyServiceREST: CompanyServiceREST) {}

  ngOnInit(): void {
    //this.consultarEmpresas();
    this.getEmpresasgRPC();
  }

  consultarEmpresas(): void{
    this.companyServiceREST.getEmpresas().subscribe(emp => this.empresas = emp);
  }




  getEmpresasgRPC () {
    console.log("Haciendo la llamada a RPC");
    const request = new FiltrosRequest();
    request.setId(1);
    console.log("Ahora si");
    grpc.unary(CompanyService.LoadCompanies, {
    request: request,
    host: "localhost:9095",
    onEnd: res => {
      const { status, statusMessage, headers, message, trailers } = res;
      if (status === grpc.Code.OK && message) {
        console.log("all ok. got book: ", message.toObject());
      }
    }
    });
    console.log("Acabando");
  }




}
