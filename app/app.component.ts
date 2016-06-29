import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
		<h1 class="alert alert-info" style="color:#555555;text-align:center;">
			My First Angular 2 App!
		</h1>
		<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
