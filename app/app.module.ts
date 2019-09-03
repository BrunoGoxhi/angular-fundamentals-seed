import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'passengers', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
     BrowserModule,
     PassengerDashboardModule,
     RouterModule.forRoot(routes, { useHash: true})
  ],
  bootstrap: [AppComponent]
}) 

export class AppModule {}