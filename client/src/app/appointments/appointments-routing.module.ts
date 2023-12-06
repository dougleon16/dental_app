import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulerPageComponent } from './pages/scheduler-page/scheduler-page.component';
import { CheckAppointmentsPageComponent } from './pages/check-appointments-page/check-appointments-page.component';
import { QuotationComponent } from './pages/quotation/quotation.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'agendar-cita',
    component: SchedulerPageComponent,
  },
  {
    path: 'consultar-cita',
    component: CheckAppointmentsPageComponent,
  },
  {
    path: 'cotizar',
    component: QuotationComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
