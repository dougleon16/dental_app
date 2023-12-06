import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public enlaceActivo: string | null = null;
  public sidebarLinks: { name: string; routerLink: string; icon: string }[] = [
    {
      name: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/inicio',
    },
    {
      name: 'Agendar Cita',
      icon: 'pi pi-calendar',
      routerLink: '/agendar-cita',
    },
    {
      name: 'Consultar Cita',
      icon: 'pi pi-user',
      routerLink: '/consultar-cita',
    },
    {
      name: 'Cotizar',
      icon: 'pi pi-calculator',
      routerLink: '/cotizar',
    },
  ];
}
