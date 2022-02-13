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

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.productService.read().subscribe((product)  => {
      this.list = product;
    });
  }

}
