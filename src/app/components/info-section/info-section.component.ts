import { Component, Input } from '@angular/core';
import { InfoSection } from 'src/app/models/info-section-model/info-section-model';

@Component({
  selector: 'info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent {
  @Input() sectionTitle?: string;
  @Input() infoSectionItemsProps!: Array<InfoSection>;
}
