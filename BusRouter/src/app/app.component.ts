
import {} from 'googlemaps';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements AfterViewInit{
  title = 'BusRouter';
  @ViewChild('map') mapElement: any;
  map: google.maps.Map | undefined;
  
  ngAfterViewInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng(37.7749, -122.4194),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    this.addMarker(this.map)
    
 }

  addMarker(map: any) {
    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194},
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        },
        map: map
    });
  }
}
 