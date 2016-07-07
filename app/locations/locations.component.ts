import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from '../app.routes';

@Component({
  selector: 'locations',
  templateUrl: 'app/locations/locations.component.html'
})
export class LocationsComponent implements OnInit {

  title: string;

  constructor(
    private router: Router
    ) {
  }

  ngOnInit() {
    this.title = "Locations"
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
