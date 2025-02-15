import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ContactComponent,
    ProjectsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
