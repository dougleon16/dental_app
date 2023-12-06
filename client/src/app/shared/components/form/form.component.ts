import { Component, Input } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input()
  title: string | undefined;
  tratamientos: any[] | undefined;
  selectedTratamientos: any | undefined;
  metodoPagos: any[] | undefined;
  selectedMetodoPagos: any | undefined;

  public appointment: any = {
    nombre: '',
    apellido: '',
    edad: 0,
    telefono: '',
    tipo_tratamiento: [],
    cedula: '',
    email: '',
    fecha: '',
    metodo_pago: [],
  };

  date: Date | undefined;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.tratamientos = [
      {
        name: 'Revisión y limpieza dental',
      },

      {
        name: 'Tratamiento de caries',
      },

      {
        name: 'Extracciones dentales',
      },

      {
        name: 'Ortodoncia',
      },

      {
        name: 'Tratamiento de encias',
      },
    ];

    this.metodoPagos = [
      {
        name: 'Efectivo',
      },
      {
        name: 'Visa/Mastercard',
      },
      {
        name: 'Paypal',
      },
      {
        name: 'Nequi',
      },
      {
        name: 'Yappy',
      },
    ];
  }

  onSubmit(form: any) {
    this.appointmentService.createAppointments(this.appointment).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        form.reset();
      },
    });
  }
}
