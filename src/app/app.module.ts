import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { SiloComponent } from './silo/silo.component';
import { ValueComponent } from './value/value.component';

import { SocketService } from './socket.service';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    SiloComponent,
    ValueComponent
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
