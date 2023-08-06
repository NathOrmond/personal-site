import { Component, Input } from '@angular/core';
import { InfoSection } from 'src/app/models/info-section-model/info-section-model';

@Component({
  selector: 'info-section-item',
  templateUrl: './info-section-item.component.html',
  styleUrls: ['./info-section-item.component.css']
})
export class InfoSectionItemComponent {

  @Input() infoSectionProps!: InfoSection;

}
