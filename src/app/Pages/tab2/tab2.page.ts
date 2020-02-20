import { Component } from '@angular/core';
import { DataLocalService } from '../../Services/data-local.service';
import { RegisterData } from '../../Models/registerData.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  savedItems:RegisterData[] = []

  constructor(public dataLocal:DataLocalService) {
    this.savedItems = dataLocal.saved
  }

  openInBrowser(data){
    this.dataLocal.openRegister(data)
  }

}
