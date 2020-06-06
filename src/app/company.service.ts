import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Empresa } from './entrar-empresa/empresa';
import { EmpresaResult } from './entrar-empresa/empresaResult';
import { EmpresaRequest } from './entrar-empresa/empresaRequest';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  empresas: EmpresaResult[] = [];
  corsHeaders: HttpHeaders;

  constructor(private http: HttpClient) {

    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
 
     });
  }


  getEmpresas(): Observable<EmpresaResult[]> {
    //const urlConsultarEmpresas = 'http://18.218.22.133:9000/company/load/';
    const urlConsultarEmpresas = '/company/load/';
    let filtrosCompany = new Empresa(null, null, null, null, null, null, null,null, null, true);
    let empresaRequest = new EmpresaRequest(0, "angular", filtrosCompany);

    this.http.post<EmpresaResult[]>(urlConsultarEmpresas, empresaRequest, { observe: 'response', headers: this.corsHeaders }).subscribe(data => {
      console.info(data);
      let emp: EmpresaResult[] = data.body;
      for (let entry of emp) {
        this.empresas.push(entry);
      }
    });

    return of(this.empresas);
    
  }
  

}
