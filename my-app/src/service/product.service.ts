
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product_model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}