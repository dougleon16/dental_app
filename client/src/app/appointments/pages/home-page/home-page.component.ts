import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  tratamientos: any[] | undefined;
  selectedTratamientos: any | undefined;
  metodoPagos: any[] | undefined;
  selectedMetodoPagos: any | undefined;
  visible: boolean = false;
  displayDialog = false;
  selectedAppointment: any;
  public appointment: any = {};
  public allAppointments: any = [];
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAllAppointments();
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

  openDialog(appointment: any) {
    this.selectedAppointment = { ...appointment };
    this.displayDialog = true;
  }

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe({
      next: (data: any) => {
        console.log(data.data);
        this.allAppointments = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteAppointment(id: string) {
    this.appointmentService.deleteAppointmentsById(id).subscribe({
      next: (data: any) => {
        // Elimina la cita del arreglo local
        this.allAppointments = this.allAppointments.filter(
          (appointment: any) => appointment._id !== id
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAppointmentById(id: string) {
    this.appointmentService.getAppointmentsById(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.appointment = data.data[0];
        console.log(this.appointment);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  showDialog() {
    this.visible = true;
  }

  onSubmit(form: any) {}

  update(id: string) {
    this.appointmentService
      .updateAppointmentsById(id, this.appointment)
      .subscribe({
        next: (data: any) => {
          this.displayDialog = false; // Cierra el modal
          this.getAllAppointments();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
