import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Month, Months, Days, Day } from './constant';
import { toolUtils } from '@shared/utils/index';

@Component({
  selector: 'app-select-coordinate',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './select-coordinate.component.html',
  styleUrl: './select-coordinate.component.scss'
})
export class SelectCoordinateComponent implements OnInit {
  @Input() defaultMonth: Month = '01';
  Days = Days;
  @Input() defaultDay: Day<any> = '15';

  // constants
  Months = Months;
  toolUtils = toolUtils;

  ngOnInit(): void {}

  getMonthHasDays() {
    console.log(this.defaultDay, this.defaultMonth);
    return toolUtils.createRange(1, this.Days[String(this.defaultMonth)], 1).map(item => {
      if (item < 10) {
        return `0${item}`;
      }
      return `${item}`;
    });
  }
}
