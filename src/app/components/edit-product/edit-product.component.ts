import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    id: string = '';

    currentProduct: Product = new Product()
  
    constructor(private productService: ProductService, private actRoute: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
        const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
        this.id = parseInt(routeId).toString();
        this.productService.getProductByID(this.id).subscribe(foundProduct => {
            console.log(foundProduct);
            this.currentProduct = foundProduct;
        });
    }
  
    onSubmit(){
      this.productService.editProductByID(this.id, this.currentProduct).subscribe(edittedProduct => {
        console.log(edittedProduct);
        this.router.navigateByUrl("/products");
      })
    }
}