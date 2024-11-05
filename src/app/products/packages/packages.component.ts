import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss'],
    standalone: true
})
export class PackagesComponent {
  
  //Link to purchase the AAA - Yearly Plan
  PurchaseAAAYP() {
  window.open('https://playat.theyardsd.com/packages/23921/purchase');
  }

  //Link to purchase the AAA - Yearly Plan
  PurchaseAAAMP() {
  window.open('https://playat.theyardsd.com/packages/28765/purchase');
  }
  
  //Link to purchase the AA - Yearly Plan
  PurchaseAMP() {
  window.open('https://playat.theyardsd.com/packages/33262/purchase');
  }

  //Link to purchase the AAA - Yearly Plan
  PurchaseAAMP() {
  window.open('https://playat.theyardsd.com/packages/23920/purchase');
  }
}