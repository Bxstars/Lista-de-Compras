import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/template/footer/footer.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { NavComponent } from './shared/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './modules/product/components/product-create/product-create.component';
import { ProductDeleteComponent } from './modules/product/components/product-delete/product-delete.component';
import { ProductReadComponent } from './modules/product/components/product-read/product-read.component';
import { ProductUpdateComponent } from './modules/product/components/product-update/product-update.component';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData  } from '@angular/common';
import { ProductComponent } from './modules/product/components/product/product.component';
import { ListProductsComponent } from './modules/list-products/components/list-products/list-products.component';


registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductComponent,
    ListProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
