import { Component, OnInit } from '@angular/core';
import { ProductInterface } from './interfaces/product.interface';
import {productMocks} from "./__mocks__/products.mock";
import {ProductsService} from "./products.service";
import {MessageService} from "../messages/message.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductInterface[] = [];
  public selectedProduct?: ProductInterface;

  constructor(private productService: ProductsService, private messageService: MessageService){}

  onSelect(product: ProductInterface): void {
    this.selectedProduct = product;
    this.messageService.add(`MessagesComponent: Selected product id=${product.id}`);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
