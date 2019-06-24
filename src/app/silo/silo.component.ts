import {Component, OnInit} from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.scss']
})
export class SiloComponent implements OnInit {
  public indicators = [];
  private isInitLoad = true;
  public isErrorServer = false;

  constructor(private socketService: SocketService) {
    this.socketService.update().subscribe(data => {
      this.isErrorServer = false;
      data.forEach((indicator, i) => {
        if (this.isInitLoad) {
          this.indicators.push(indicator);
        }
        this.indicators[i].value = indicator.value;
        this.indicators[i].percent = Math.floor( (indicator.value / indicator.maxValue) * 100);
        this.indicators[i].warning = indicator.value < indicator.minValue;
      });
      this.isInitLoad = false;
    }, () => {
      this.isErrorServer = true;
    });
  }
  ngOnInit() {
    this.socketService.getData();
  }
}
