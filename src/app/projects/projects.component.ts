import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../support/contents';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Array<any> = projects
}
