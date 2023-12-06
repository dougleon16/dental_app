import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { api } from './API';
import { Observable, catchError, filter, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  public appointments: any[] = [];

  createAppointments(appointments: any[]) {
    return this._http.post(`${api.url}api/v1/appointments/`, appointments);
  }

  getAppointmentByIdAndCedula(cedula: string) {
    // Agrega la cedula como parámetro de la consulta
    return this._http.get(`${api.url}api/v1/appointments/${cedula}`);
  }

  getAllAppointments() {
    return this._http.get(`${api.url}api/v1/appointments`);
  }

  // En tu servicio

  deleteAppointmentsById(id: string): Observable<any> {
    return this._http.delete(`${api.url}api/v1/appointments/${id}`);
  }

  updateAppointmentsById(id: string, data: any): Observable<any> {
    return this._http.put(`${api.url}api/v1/appointments/${id}`, data);
  }

  getAppointmentsById(id: string): Observable<any> {
    return this._http.get(`${api.url}api/v1/appointment/${id}`);
  }
}
