import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";
import {CustomersService} from "../../../../../services/customers.service";




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




@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatPaginator,
    NgForOf,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent  implements OnInit{


  mform: FormGroup = new FormGroup({
    text: new FormControl()
  });

  // @ts-ignore
  obs: Subscription ;


  page:any=0;
  size:any=10;
  searchText:any=''
  dataArray:any=[]
  count=0
  pageEvent:PageEvent | undefined;

  controlsOn: boolean = false;

  // @ts-ignore
 @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;






  constructor(private customerService:CustomersService) {
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
        type: "area",
        height: 300, // Set height to 100%
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
        enabled: true
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


  ngOnInit(): void {
    this.obs=this.mform.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(data => {
       this.searchText= data.text
        this.loadCustomer()
      });


    this.loadCustomer();
    this.controlsOn = true;
  }

  private loadCustomer(){
    this.customerService.findCustomer(this.page,this.size,this.searchText).subscribe((response)=>{
      console.log(response.data.data)
      console.log(response.data.count)
      this.dataArray=response.data.data
      this.count=response.data.count
    })
  }
  getServerData(pageData:PageEvent){
    this.page=pageData.pageIndex
    this.size=pageData.pageSize
    this.loadCustomer()
  }


}
