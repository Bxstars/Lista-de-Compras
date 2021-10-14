import { ListProductsComponent } from './modules/list-products/components/list-products/list-products.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductCreateComponent } from "./modules/product/components/product-create/product-create.component";
import { ProductDeleteComponent } from "./modules/product/components/product-delete/product-delete.component";
import { ProductUpdateComponent } from "./modules/product/components/product-update/product-update.component";
import { ProductComponent } from "./modules/product/components/product/product.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "lists",
    component: ListProductsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
