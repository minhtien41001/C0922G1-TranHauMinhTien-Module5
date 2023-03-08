import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/header/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FacilityComponent } from './component/facility/facility.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { EditFacilityComponent } from './component/facility/edit-facility/edit-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NavigationComponent,
    FacilityComponent,
    CreateFacilityComponent,
    ListFacilityComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
