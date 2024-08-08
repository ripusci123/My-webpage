import { AppServerModule } from './app/app.server.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environments';
import { renderModule } from '@angular/platform-server';

if (environment.production) {
  enableProdMode();
}

export async function renderApp() {
  return await renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url: '/'
  });
}
