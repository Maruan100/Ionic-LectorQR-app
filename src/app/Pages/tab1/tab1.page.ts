import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../Services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private BarcodeScanner: BarcodeScanner, 
    private dataLocal:DataLocalService ){
  }

  scan(){
    this.BarcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if(!barcodeData.cancelled){
        this.dataLocal.saveRegister(barcodeData.format,barcodeData.text);
      }

     }).catch(err => {
         console.log('Error', err);
        //  this.dataLocal.saveRegister( 'QRCode','https://ionicons.com/' );
           this.dataLocal.saveRegister( 'QRCode','geo:40.73151796986687,-74.06087294062502');
     });
  }

}
