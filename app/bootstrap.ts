import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  {provide: PLATFORM_DIRECTIVES, useValue: [ROUTER_DIRECTIVES], multi: true}
])
