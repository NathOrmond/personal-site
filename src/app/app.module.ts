import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { InfoSectionItemComponent } from './components/info-section-item/info-section-item.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoSectionComponent,
    InfoSectionItemComponent,
    AboutMeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
