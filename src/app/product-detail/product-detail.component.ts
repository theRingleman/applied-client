import { Component, OnInit, Input } from '@angular/core';
import {ProductInterface} from '../products/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product?: ProductInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
