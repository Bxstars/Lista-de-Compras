import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'bx-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
