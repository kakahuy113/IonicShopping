import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private shopping: ShoppingService) { }
  data = []
  total = 0;
  ngOnInit() {
    this.data = this.shopping.data;

    this.shopping.data.forEach(data => {
      const temp = data.price * data.quantity
      this.total += temp
    })
  }

}
