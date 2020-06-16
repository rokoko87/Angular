import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent implements OnInit {


  title = 'app';





  columnDefs = [
        {headerName: 'make', field: 'make', sortable: true, filter: true},
        {headerName: 'model', field: 'model', sortable: true, filter: true },
        {headerName: 'price', field: 'price', sortable: true, filter: true }
  ];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

  constructor() { }

  ngOnInit(): void {
  }

}
