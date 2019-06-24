import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { SiloComponent } from './silo/silo.component';
import { ValueComponent } from './value/value.component';

import { SocketService } from './socket.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    SiloComponent,
    ValueComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
