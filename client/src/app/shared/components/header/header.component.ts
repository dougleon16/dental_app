import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input()
  public title: string = '';

  @Input()
  public subtitle: string = '';

  @Input()
  public span: string = '';
}
