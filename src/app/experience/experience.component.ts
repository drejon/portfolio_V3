import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experience } from '../../support/contents';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience: Array<any> = experience
}
