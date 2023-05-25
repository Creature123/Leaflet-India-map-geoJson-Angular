import { Component } from '@angular/core';
import * as L from 'leaflet';
import { JsonServiceService } from './json-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonData: any;
  indiaData : any;

  constructor(private jsonService: JsonServiceService) { }

  title = 'AngularOSM';
  map: L.Map;


  ngOnInit() {

    this.getJsonData();


  }

  getJsonData() {
    this.jsonService.getJsonData()
      .subscribe(data => {
        debugger;
        this.jsonData = data.features[0].geometry;
        console.log(this.jsonData);
        this.initializeMap();
        // Perform further operations with the JSON data
      });
  }

  private initializeMap() {
    // Set the initial center and zoom level

    const initialLatLng = L.latLng(22.958, 83.496);
    const initialZoom = 5;


    // Create the map instance
    this.map = L.map('map', {
      center: initialLatLng,
      zoom: initialZoom,
      zoomControl: true,
      trackResize: true,
    });

    // Add the tile layer (OpenStreetMap)
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);


    const indiaPolygon = L.geoJSON(this.jsonData, {
      style: {
        fillOpacity:0.01,
        fillColor: 'white',
        opacity: 1,
        color: 'blue', // Set the boundary color
        weight: 2 // Set the boundary weight
      }
    }).addTo(this.map);

     console.log(indiaPolygon.getBounds());
    // // Fit the map view to the India boundary
    this.map.setMaxBounds(indiaPolygon.getBounds());
    this.map.fitBounds(indiaPolygon.getBounds());
  }

}
