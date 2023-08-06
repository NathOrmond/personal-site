import { Component, Input } from '@angular/core';
import { AboutMe } from 'src/app/models/about-me-model/about-me-model';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})

export class AboutMeSectionComponent {
  @Input() aboutMeProps!: AboutMe;
}
