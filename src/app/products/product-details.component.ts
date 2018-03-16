import {Component, OnInit} from '@angular/core';

import {Iproduct} from './product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: Iproduct;

  constructor() {}

  ngOnInit() {

  }
}
