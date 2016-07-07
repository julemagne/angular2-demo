import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  precompile: [DashboardComponent, LocationsComponent]
})
export class AppComponent { }
