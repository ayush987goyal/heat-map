import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  mainData: { name: string, series: { name: string, value: number }[] }[] = [];

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json').map(
      (res) => {
        let gotData = res.json();
        let tempData = gotData.monthlyVariance;
        const baseTemp = gotData.baseTemperature;
        let count = 0;

        for (let item = 0; item < tempData.length; item += 12) {
          // if (item > 36) {
          //   break;
          // }
          this.mainData.push({
            name: tempData[item].year, series: []
          });
          for (let i = item; i < item + 12 && i < tempData.length; i++) {

            this.mainData[count].series.push({
              name: this.monthTransform(tempData[i].month),
              value: baseTemp + tempData[i].variance,
            });
          }
          count++;
        }
        return this.mainData;
      }
    );
  }

  monthTransform(month: number) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[month - 1];
  }

}
