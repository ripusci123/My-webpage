import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Import if needed

@NgModule({
  imports: [
    ServerModule,
    AppRoutingModule
  ],
  // Do not declare AppComponent here
  bootstrap: [AppComponent]
})
export class AppServerModule {}
