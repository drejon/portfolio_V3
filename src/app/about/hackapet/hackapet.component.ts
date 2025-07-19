import { Component } from '@angular/core';
import { ContactComponent } from '../../contact/contact.component';
import { hackapet } from '../about.content';
import { About } from '../about';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hackapet',
  imports: [
    CommonModule,
    ContactComponent,
  ],
  templateUrl: './hackapet.component.html',
  styleUrl: './hackapet.component.css'
})
export class HackapetComponent {
  hackapet: About = hackapet
}
