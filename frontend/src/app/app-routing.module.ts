import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductCreateComponent } from "./modules/product/components/product-create/product-create.component";
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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
