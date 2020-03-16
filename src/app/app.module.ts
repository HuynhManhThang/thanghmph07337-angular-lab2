import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { MytableComponent } from './mytable/mytable.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, CategoryComponent, MytableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
