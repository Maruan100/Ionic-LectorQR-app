import { Injectable } from '@angular/core';
import { RegisterData } from '../Models/registerData.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  saved: RegisterData[] = [];

  constructor(
    private storage: Storage, 
    private navCtrl: NavController,
    private iab: InAppBrowser) { 
    this.loadStorage()

  }

  loadStorage(){
    
    this.storage.get('registerData').then( registerData => {
      this.saved = registerData || [];
    });

  }

  saveRegister( format: string, text: string ){

    const newRegister = new RegisterData(format,text);
    this.saved.unshift(newRegister);

    console.log(this.saved);

    this.storage.set('registerData',this.saved);

    this.openRegister(newRegister);
  }

  openRegister(registro:RegisterData){
     this.navCtrl.navigateForward('/tabs/tab2');
   console.log(registro);
   
    switch(registro.type){
      case 'http':
      this.iab.create(registro.text,'_system');
      break;

      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/map/${registro.text}`)
      break;

    }
  }


}
