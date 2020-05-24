import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ShoppingService } from '../services/shopping.service'
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.page.html',
  styleUrls: ['./check-out.page.scss'],
})
export class CheckOutPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  google: any
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  data = [];
  constructor(
    public alertController: AlertController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    private ShopService: ShoppingService) { 
  
  }
 
  
  ngOnInit() {
    
    this.data = this.ShopService.data
    console.log(this.data);
    
    this.loadMap();
  }
  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      /* this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); */

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        /* this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng()) */
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  /* getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  } */
  purchase() {
    firebase.database().ref('Cart').remove()
  }

  processForm(event) {
    event.preventDefault();
    this.alertController.create({
      header: 'Thank for ur purchase',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home/beef'])
        }
      }]
    }).then(alert => alert.present());
    
  }
}

