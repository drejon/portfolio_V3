import { Component } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
// import { PolyhedronComponent } from '../polyhedron/polyhedron.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    // CommonModule,
    ClipboardModule,
    // PolyhedronComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  copy(): string {
    return 'drc.working@gmail.com'
  }
}
