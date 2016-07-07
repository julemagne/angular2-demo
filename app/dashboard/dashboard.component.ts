import { Component, OnInit } from '@angular/core';
// import { Router }           from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title: string;

  constructor(
    // private router: Router
    ) {
  }

  ngOnInit() {
    this.title = "Hello from the Dashboard"
  }

  // gotoLocations() {
  //   this.router.navigate(['/locations']);
  // }
}
