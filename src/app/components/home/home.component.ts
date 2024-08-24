import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public cars: Product[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe((cars) => {
      this.cars = cars;
    })
  }

}
