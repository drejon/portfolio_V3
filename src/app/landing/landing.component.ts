import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { StudiesComponent } from '../studies/studies.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ContactComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    StudiesComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
