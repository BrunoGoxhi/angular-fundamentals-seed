import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';
//import { PassengerDashboardComponent} from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule
     //,PassengerDashboardComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}