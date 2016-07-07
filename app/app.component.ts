import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';

@Component({
  selector: 'my-app',
  template: `
		<h1 class="alert alert-info" style="color:#555555;text-align:center;">
			My First Angular 2 App!
		</h1>
		<router-outlet></router-outlet>`,
  precompile: [DashboardComponent, LocationsComponent]
})
export class AppComponent { }
