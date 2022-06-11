import {  Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";

import { IProduct } from "src/app/core/interfaces/IProduct";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "bx-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.scss"],
})
export class ProductReadComponent implements OnInit {
  productList: IProduct[] = [];
  displayedColumns: string[] = ['id','category','producer','name','price', 'action'];

  constructor(private productServices: ProductService) { }

  ngOnInit(): void {
      this.productServices.read().subscribe((products) => {
      this.productList = products;
      console.log(products);
    });
  }

}
