import {Component, Input, OnChanges } from '@angular/core';
import * as keys from '../keys';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnChanges {
  @Input() value: number;
  @Input() warning: boolean;
  private color: string;

  ngOnChanges() {
    this.value = 100 - this.value;
    this.color =  (this.warning) ? keys.RED_COLOR : keys.GREEN_COLOR ;
  }
}
