import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct} from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'bx-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  productSelected: IProduct = {
    id: 0,
    name: ' ',
    price: 0,
    category: '',
    producer: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.productSelected = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.productSelected).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
