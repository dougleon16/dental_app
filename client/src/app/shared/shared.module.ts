import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FormComponent],
  imports: [CommonModule, PrimeNgModule, RouterModule, FormsModule],
  exports: [SidebarComponent, HeaderComponent, FormComponent],
})
export class SharedModule {}
