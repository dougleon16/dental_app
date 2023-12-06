import { NgModule } from '@angular/core';

// prime ui components
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  exports: [
    CardModule,
    MessagesModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    RadioButtonModule,
  ],
})
export class PrimeNgModule {}
