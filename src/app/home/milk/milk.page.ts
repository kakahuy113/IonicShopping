import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import { ShoppingService } from '../../services/shopping.service'
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore'
@Component({
  selector: 'app-milk',
  templateUrl: './milk.page.html',
  styleUrls: ['./milk.page.scss'],
})
export class MilkPage implements OnInit {

  productFirebase= firebase.database().ref('/products');
  CartFirebase= firebase.database().ref('/Cart');
  item = []
  quantity = {}
  cart= []
  constructor(
    private shopping: ShoppingService,
     private db: AngularFireDatabase, 
     private firestore: AngularFirestore) {
   
  }
  ngOnInit() {
    this.productFirebase.child('drink').on('value' , (data) => {
      this.item = data.val();
      this.item.forEach((product => {
        this.quantity[product.productid]= 0
      }));
    });
   
      
  }

  plus(id) {
    let i = this.quantity[id];
    if(i <20 ) {
      ++i;
    }    
    this.quantity[id] = i
  }

  minus(id) {
    let i = this.quantity[id];
    if(i > 0) {
      --i;
    }    
    this.quantity[id] = i
  }

  addtoCart(item) {
    if(this.quantity[item.productid] != 0) {
      this.CartFirebase.child('Drink '+item.productid).set({
        ...item,
        quantity: this.quantity[item.productid]
      }) 
      this.shopping.data = []
      this.CartFirebase.on('value' , (data)=> {
        const a = data.val();
        for(var i in a) {
          this.shopping.data.push(a[i]);
        }
      })
    }
  }

}
