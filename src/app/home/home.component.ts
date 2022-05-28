import { DomService } from './../services/dom.service';
import { Component, OnInit, AfterViewInit, } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  sessions:any
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2022;
  month: number = 7;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 9;

  ngAfterViewInit() {
    this.myTimer();
  }
  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2022, 7, 9);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    document.getElementById('days')!.innerText = this.days;
    document.getElementById('hours')!.innerText = this.hours;
    document.getElementById('mins')!.innerText = this.minutes;
    document.getElementById('seconds')!.innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }

  constructor(private service:DomService) { }

  ngOnInit(): void {
    this.service.fetchData().subscribe((data:any)=>{
      console.log(data.data.rows[0][0])
      this.sessions =data.data.rows[0][0]
    })
  }

}
