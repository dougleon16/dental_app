import { Component } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css'],
})
export class QuotationComponent {
  selectedTreatment: any = null;

  treatments: any[] = [
    {
      name: 'Revisión y limpieza dental',
      key: 'A',
      precio: '50',
    },

    {
      name: 'Tratamiento de caries',
      key: 'B',
      precio: '75',
    },

    {
      name: 'Extracciones dentales',
      key: 'C',
      precio: '100',
    },

    {
      name: 'Ortodoncia',
      key: 'D',
      precio: '150',
    },

    {
      name: 'Tratamiento de encias',
      key: 'E',
      precio: '200',
    },
  ];

  constructor() {}

  cotizar() {
    console.log(this.selectedTreatment);
  }
}
