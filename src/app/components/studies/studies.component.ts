import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studies } from '../../../support/contents';


@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css'
})
export class StudiesComponent {
  studies: Array<any> = studies
}
