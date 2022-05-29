import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'lc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: IProduct[] = [];
  priceList: any[] = [];
  priceMin: number = 0
  priceMax: number = 0;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.productService.read().subscribe((product) => {
      this.list = product;
      this.fetchProductPrice();
    });
  }

  fetchProductPrice() {
    this.priceList = this.list.map((price) => price.price);
    this.priceMin = Math.min(...this.priceList);
    this.priceMax = Math.max(...this.priceList);
  }

}
