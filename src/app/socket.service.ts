import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private observable: Observable<any>;
  private host = 'http://main.podkovyrov.ru:5555';
  private socket: any;
  constructor() {
    this.socket = io(this.host);
  }

  update(): Observable<any> {
    return  this.observable = new Observable((observer) => {
      this.socket.on('update', (data) => observer.next(data));
    });
  }
  getData() {
    this.socket.emit('update');
  }
}
