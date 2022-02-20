import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formProduct: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  get f() {
    return this.formProduct.controls;
  }

  ngOnInit( ): void {
    this.createForm(this.product);
  }

  createForm(form: IProduct) {
    this.formProduct = this.formBuilder.group({
      name: [form.name,
         Validators.required,
      ],
      price: [form.price,
        [
          Validators.required,
          Validators.min(1),
          Validators.pattern("^[0-9]*$")
      ]],
      category: [form.category,
         Validators.required
      ],
      producer: [form.producer,
         Validators.required
      ],
    })
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
