import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  

  constructor() { }

  ngOnInit(): void {
  }
  // map options
  mapOptions: google.maps.MapOptions = {
    center: { lat: 0.0768, lng:  34.7078 },
    zoom : 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    panControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT

    },
    scrollwheel: false,
    scaleControl: false,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
   
 }



}
