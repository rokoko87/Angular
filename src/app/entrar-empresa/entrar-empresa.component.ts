import { Component, OnInit } from '@angular/core';
import { EmpresaResult } from './empresaResult';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-entrar-empresa',
  templateUrl: './entrar-empresa.component.html',
  styleUrls: ['./entrar-empresa.component.css']
})
export class EntrarEmpresaComponent implements OnInit {

  empresas: EmpresaResult[] = [];


  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.consultarEmpresas();
  }

  consultarEmpresas(): void{
    this.companyService.getEmpresas().subscribe(emp => this.empresas = emp);
  }

  


}
