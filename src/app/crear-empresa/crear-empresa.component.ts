import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AltaEmpresa } from './alta_empresa';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {


  companyForm = new FormGroup({
    nombre: new FormControl(''),
    descCorta: new FormControl(''),
    descripcion: new FormControl(''),

    email: new FormControl(''),
    password: new FormControl(''),

    primerNombre: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    telefonoMovil: new FormControl('')

  });

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }


  guardar() {
    var nombre = this.companyForm.get('nombre').value;
    console.info(nombre);
    var descCorta = this.companyForm.get('descCorta').value;
    var descripcion = this.companyForm.get('descripcion').value;
    var email = this.companyForm.get('email').value;
    var password = this.companyForm.get('password').value;
    var primerNombre = this.companyForm.get('primerNombre').value;
    var apellidoPaterno = this.companyForm.get('apellidoPaterno').value;
    var apellidoMaterno = this.companyForm.get('apellidoMaterno').value;
    var telefonoMovil = this.companyForm.get('telefonoMovil').value;


    let info = new AltaEmpresa(nombre,
              "Alejandro Vazquez",
              descCorta,
              descripcion,

              "200", /*Plan */

              password,
              email,

              telefonoMovil,   /*Empresa contacto*/
              email, /*Empresa correo electronico */

              primerNombre,
              "",
              apellidoPaterno,
              apellidoMaterno,

              1, /* Genero */
              telefonoMovil, /* Persona tel celular */
              "", /* Telefono de casa */

              393,
              484,
              502,
              511);

      console.info(info);

      this.companyService.crearEmpresa(info);

  }



}
