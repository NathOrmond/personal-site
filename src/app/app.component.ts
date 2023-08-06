import { Component } from '@angular/core';
import { AboutMe, AboutMeModel } from './models/about-me-model/about-me-model';
import { InfoSection, InfoSectionModel } from './models/info-section-model/info-section-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'cv';
  aboutMeModel : AboutMe = new AboutMeModel("Nathan Ormond", "Software Engineer", "London", "example [at] gmail [dot] com", ["github"], "Lorem ipsum I want a job");
  mockInfoSectionTitle: string = "Mock Info Section Title";
  mockInfoSection: InfoSection = new InfoSectionModel("Headine", ["subtitle1", "subtitle2"], "This is some info section details Lorem ipsum dolor sit amet" );
  infoSectionArray: Array<InfoSection> = [this.mockInfoSection, this.mockInfoSection]

}
