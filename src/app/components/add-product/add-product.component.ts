import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  newProduct: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.productService.addNewProduct(this.newProduct).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")
    });
  }
}
