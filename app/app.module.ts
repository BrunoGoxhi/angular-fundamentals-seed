import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}