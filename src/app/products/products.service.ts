import { Injectable } from '@angular/core';
import { ProductInterface } from './interfaces/product.interface';
import { productMocks } from './__mocks__/products.mock';
import { of, Observable } from 'rxjs';
import {MessageService} from '../messages/message.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'http://localhost:8080/products';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getProducts(): Observable<ProductInterface[]> {
    const products = this.http.get<ProductInterface[]>(this.productsUrl);
    this.messageService.add('ProductsService: fetched products');
    return products;
  }
}
