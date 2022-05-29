import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct} from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'lc-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  productSelected: IProduct = {
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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  get f() {
    return this.formProduct.controls;
  }

  ngOnInit(): void {
    this.productSelected.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.createForm(this.productSelected);
    this.productService.readById(this.productSelected.id).subscribe(product => {
      this.populateForm(product);
    });
  }

  populateForm(product: IProduct){
    this.formProduct.controls['name'].setValue(product.name);
    this.formProduct.controls['price'].setValue(product.price);
    this.formProduct.controls['category'].setValue(product.category);
    this.formProduct.controls['producer'].setValue(product.producer);
  }

  createForm(form: IProduct) {
    this.formProduct = this.formBuilder.group({
      id: [form.id],
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

  updateProduct(): void {
    let formValue = this.formProduct.value;
    this.productService.update(formValue).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
