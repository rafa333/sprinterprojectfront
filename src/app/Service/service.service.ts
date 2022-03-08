import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/products'

  getProducts () {
    return this.http.get<Product[]>(this.url);
  }

  createProduct (product:Product) {
    return this.http.post<Product>(this.url, product);
  }

  getProductById (id:number) {
    return this.http.get<Product>(this.url+"/"+id);
  }

  updateProduct (product:Product) {
    return this.http.put<Product>(this.url+"/"+product.id, product);
  }

  deleteProduct (product:Product) {
    return this.http.delete<Product>(this.url+"/"+product.id);
  }
}
