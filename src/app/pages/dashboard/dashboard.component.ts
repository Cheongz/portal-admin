import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  chartData = [
    { x: 'January', y: 0 },
    { x: 'FEBRUARY', y: 0 },
    { x: 'MARCH', y: 450.33 },
    { x: 'APRIL', y: 0 },
    { x: 'MAY', y: 0 },
    { x: 'JUN', y: 0 },
    { x: 'JULY', y: 0 },
    { x: 'AUGUST', y: 0 },
    { x: 'SEPTEMBER', y: 0 },
    { x: 'OCTOBER', y: 0 },
    { x: 'NOVEMBER', y: 0 },
    { x: 'DECEMBER', y: 0 },
  ];

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: this.chartData,
        },
      ],
      chart: {
        height: 400,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Monthly Rewards Chart',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: this.chartData.map((m) => m.x),
      },
    };
  }
}
