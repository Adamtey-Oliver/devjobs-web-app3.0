import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Example route, replace with your actual components
  // Add more routes as needed
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [],
})
export class AppModule {}
