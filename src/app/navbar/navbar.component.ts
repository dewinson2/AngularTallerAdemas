import { Component, Output, EventEmitter } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() None = new EventEmitter<void>();

  onClick() {
    this.None.emit();
  }
}
