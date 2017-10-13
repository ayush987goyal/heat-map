import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  view: any[] = [1500, 600];
  heatData: any;
  colorScheme= {
    name: 'vivid',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514'
    ]
  };
  animations = true;
  gradient = false;
  innerPadding = 0;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Years';
  yAxisLabel = 'Months';
  tooltipDisabled = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        console.log(data);
        this.heatData = data;
      }
    );
  }

  select(event) {
    console.log(event);
  }
}
