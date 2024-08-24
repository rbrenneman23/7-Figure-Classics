import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataSource: string = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  lastID = 3;

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
  }

  getProductByID(id: string): Observable<Product> {
    return this.http.get<Product>(this.dataSource + "/" + id);
  }

  addNewProduct(newProduct: Product): Observable<Product> {
    this.lastID++;
    newProduct.id = this.lastID.toString();
    return this.http.post<Product>(this.dataSource, newProduct);
  }

  editProductByID(id: string, edittedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.dataSource + "/" + id, edittedProduct);
  }

  deleteProductByID(id: string): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id);
  }
}
