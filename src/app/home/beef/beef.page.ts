import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app'
import { ShoppingService } from '../../services/shopping.service'
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-beef',
  templateUrl: './beef.page.html',
  styleUrls: ['./beef.page.scss'],
})
export class BeefPage implements OnInit {

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
    this.productFirebase.child('food').on('value' , (data) => {
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
      this.CartFirebase.child('Food'+item.productid).set({
        ...item,
        quantity: this.quantity[item.productid]
      })
     /*  this.CartFirebase.on('value', data => {
        data.forEach(d => {          
          const a = d.val();
          data.forEach(d1 => {
            const b = d1.val();
            if(a.productid === b.productid) {
              
            }
          })
        })
      })  */

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
