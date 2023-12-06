import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-check-appointments-page',
  templateUrl: './check-appointments-page.component.html',
  styleUrls: ['./check-appointments-page.component.css'],
})
export class CheckAppointmentsPageComponent {
  public cedula: string = '';
  public appointments: any = [];

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  onSubmit(form: any) {
    this.appointmentService.getAppointmentByIdAndCedula(this.cedula).subscribe({
      next: (data: any) => {
        console.log(data.data);
        this.appointments = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
