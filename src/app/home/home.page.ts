import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ShoppingService } from '../services/shopping.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private shopService: ShoppingService) {}
  beefPage() {
  this.router.navigate(['/home/beef'])
  }

  milkPage() {
    this.router.navigate(['/home/milk'])
  }

  giftPage() {
    this.router.navigate(['/home/gift'])
  }
}
