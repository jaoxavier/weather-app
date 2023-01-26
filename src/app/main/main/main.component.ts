import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  currentLocation!: any;

  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.currentLocation = pos;
      });
    }
  }
}
