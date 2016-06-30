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
    private _router: Router
    ) {
  }

  ngOnInit() {
    this.title = "Locations"
    // this.router = Router
    // console.log(this.router)
    // console.log(APP_ROUTER_PROVIDERS)
    // this.router.navigate(['/dashboard']);

  }

  gotoDashboard() {
    // APP_ROUTER_PROVIDERS[0][6].provide.navigate(['/dashboard']);
  }
}
