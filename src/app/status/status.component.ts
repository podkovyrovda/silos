import { Component, Input, OnChanges } from '@angular/core';
import * as keys from '../keys';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnChanges  {
  @Input() title: string;
  @Input() value: string;
  @Input() warning: boolean;
  private color: string;

  ngOnChanges() {
    this.color =  (this.warning) ? keys.RED_COLOR : keys.GREEN_COLOR ;
  }
}
