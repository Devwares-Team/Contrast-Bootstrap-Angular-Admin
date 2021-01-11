import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartType, ChartOptions,ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  headElements = ['Page Name', 'Views', 'Value', 'Bounce Rate']
  elements = [
    {
      name: '/demo/admin/index.html',
      views: '3,689',
      value: '$10',
      rate: '20%'
    },
    {
      name: '/demo/admin/index.html',
      views: '3,689',
      value: '$10',
      rate: '20%'
    },
    {
      name: '/demo/admin/index.html',
      views: '3,689',
      value: '$10',
      rate: '20%'
    },
  ]



  //pie chart settings
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display:false,
    },
    
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [9, 22, 7];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
          "rgba(255, 153, 51, 1)",
          "rgba(0, 102, 255, 1)",
          "rgba(153, 51, 255, 1)",
        ],
    },
  ];

  //Bar chart settings
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
    "Running"
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
        label: "My First dataset",
        backgroundColor: "rgba(0, 102, 255, 1)",
        borderColor: "rgb(0, 41, 102)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(255, 153, 51, 1)",
        borderColor: "rgb(102, 51, 0)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
