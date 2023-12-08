import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService],
})
export class FormComponent {
  @Input()
  title: string | undefined;

  public tratamientos: any[] | undefined;
  public selectedTratamientos: any | undefined;
  public metodoPagos: any[] | undefined;
  public selectedMetodoPagos: any | undefined;
  public doctores: any[] | undefined;
  public selectedDoctor: any | undefined;
  public formSubmitted = false;

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
    doctor: [],
  };
  dynamicMessage: any;
  date: Date | undefined;

  constructor(
    private appointmentService: AppointmentService,
    private messageService: MessageService
  ) {}

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

    this.doctores = [
      {
        name: 'Dr. Juan Lopez',
      },

      {
        name: 'Dr. Pedro Rodriguez',
      },

      {
        name: 'Dr. Juan Perez',
      },

      {
        name: 'Dr. Pedro Lopez',
      },
    ];
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.formSubmitted = true;
      this.appointmentService.createAppointments(this.appointment).subscribe({
        next: (data: any) => {
          this.dynamicMessage = data.message;
          this.show('success', 'Exito', this.dynamicMessage);
        },
        error: (error) => {
          this.show('error', 'Error', 'Todos los campos son obligatorios');
        },
        complete: () => {
          this.formSubmitted = false;
          form.reset();
        },
      });
    }
  }

  show(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
