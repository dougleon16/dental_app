import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulerPageComponent } from './pages/scheduler-page/scheduler-page.component';
import { CheckAppointmentsPageComponent } from './pages/check-appointments-page/check-appointments-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { QuotationComponent } from './pages/quotation/quotation.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SchedulerPageComponent,
    CheckAppointmentsPageComponent,
    QuotationComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    PrimeNgModule,
    SharedModule,
    FormsModule,
  ],
})
export class AppointmentsModule {}
