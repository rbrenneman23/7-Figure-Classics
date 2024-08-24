import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];

  sortedProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  onDelete(id: string) {
    this.productService.deleteProductByID(id.toString()).subscribe(response => {
      console.log(response);
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(foundProducts => {
      console.log(foundProducts);
      this.productList = foundProducts;
    });
  }

  priceSort(): void {
    this.productService.getAllProducts().pipe(
      map(products => products.sort((a, b) => a.price - b.price))
    ).subscribe(sortedProducts => {
      this.productList = sortedProducts;
    });
  }

  yearSort(): void {
    this.productService.getAllProducts().pipe(
      map(products => products.sort((a, b) => a.year - b.year))
    ).subscribe(sortedProducts => {
      this.productList = sortedProducts;
    })
  }
}
