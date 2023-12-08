import { MessageService } from 'primeng/api';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-check-appointments-page',
  templateUrl: './check-appointments-page.component.html',
  styleUrls: ['./check-appointments-page.component.css'],
  providers: [MessageService],
})
export class CheckAppointmentsPageComponent {
  @ViewChild('pdfContainer') pdfContainer!: ElementRef;

  public cedula: string = '';
  public appointments: any = [];

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private messageService: MessageService
  ) {}

  onSubmit(form: any) {
    this.appointmentService.getAppointmentByIdAndCedula(this.cedula).subscribe({
      next: (data: any) => {
        this.appointments = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  downloadPDF() {
    // Verifica si hay citas antes de continuar
    if (this.appointments.length === 0) {
      this.show('error', 'Error', 'No hay citas para descargar');
      return;
    }
    // Crea un nuevo documento jsPDF
    const pdf = new jsPDF();

    // Establece el estilo de texto
    pdf.setFont('Helvetica', 'normal');
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0); // Color RGB (negro)

    // Define la posición inicial para empezar a agregar texto
    let yPosition = 20;

    // Agrega un título al documento
    pdf.text(
      'Información del Cliente Consultado',
      pdf.internal.pageSize.getWidth() / 2,
      yPosition,
      { align: 'center' }
    );
    yPosition += 10; // Ajusta la posición vertical para el siguiente elemento

    // Itera sobre las citas y agrega la información al PDF
    this.appointments.forEach((appointment: any) => {
      // Crea una tabla para centrar la información del cliente
      autoTable(pdf, {
        body: [
          [
            { content: 'Nombre', styles: { fontStyle: 'bold' } },
            appointment?.nombre,
          ],
          [
            { content: 'Apellido', styles: { fontStyle: 'bold' } },
            appointment?.apellido,
          ],
          [
            { content: 'Edad', styles: { fontStyle: 'bold' } },
            appointment?.edad,
          ],
          [
            { content: 'Email', styles: { fontStyle: 'bold' } },
            appointment?.email,
          ],
          [
            { content: 'Teléfono', styles: { fontStyle: 'bold' } },
            appointment?.telefono,
          ],
          [
            { content: 'Cédula', styles: { fontStyle: 'bold' } },
            appointment?.cedula,
          ],
        ],
        startY: yPosition,
        theme: 'plain', // Puedes ajustar el tema según tus preferencias
        tableWidth: 'auto',
        styles: { cellPadding: 2, fontSize: 10 },
      });

      yPosition += 20; // Ajusta la posición vertical para el siguiente cliente
    });

    // Guarda el PDF con un nombre específico
    pdf.save(`cliente_consultado-${this.cedula}-${new Date().getTime()}.pdf`);
  }

  show(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
