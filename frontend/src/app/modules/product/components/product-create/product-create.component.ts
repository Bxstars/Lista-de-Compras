import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'lc-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    producer: ''
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
