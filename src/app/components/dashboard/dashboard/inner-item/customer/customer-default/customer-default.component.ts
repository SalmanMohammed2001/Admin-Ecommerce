import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";
import {CustomersService} from "../../../../../services/customers.service";



/*
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid, NgApexchartsModule
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


*/

@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatPaginator,
    NgForOf
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent  implements AfterViewInit,OnInit{

  page:any=0;
  size:any=10;
  searchText:any=''
  dataArray:any=[]
  count=0

  controlsOn: boolean = true;

  // @ts-ignore
/*  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
 constructor() {
   this.chartOptions = {
     series: [
       {
         name: "Order Count",
         data: [10, 41, 35, 51, 49, 62, 69, 10, 41, 35, 51, 49,],
         color: '#8E44AD'
       }
     ],
     chart: {
       animations: {
         enabled: true, // Enable animations
         easing: 'linear', // Specify easing function
         speed: 1000, // Specify animation speed in milliseconds
         animateGradually: {
           enabled: true,
           delay: 150
         },
         dynamicAnimation: {
           enabled: true,
           speed: 350
         }
       },
       type: "line",
       height: 100, // Set height to 100%
       zoom: {
         enabled: false
       },
       sparkline: {
         enabled: true
       },
       toolbar: {
         show: false
       },

     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       curve: "smooth",
       width: 1,
       colors: ['#8E44AD']
     },
     title: {
       text: "",
       align: "left"
     },
     grid: {
       show: false
     },

     xaxis: {
       categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
       ]
     }
   };
 }

*/


  constructor(private customerService:CustomersService) {
  }

  ngAfterViewInit(): void {
    this.controlsOn = true;
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  private loadCustomer(){
    this.customerService.findCustomer(this.page,this.size,this.searchText).subscribe((response)=>{
      console.log(response.data.data)
      console.log(response.data.count)
      this.dataArray=response.data.data
      this.count=response.data.count
    })
  }


}
