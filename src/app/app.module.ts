import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RlistComponent } from './recipebook/rlist/rlist.component';
import { RdetailComponent } from './recipebook/rdetail/rdetail.component';
import { RitemComponent } from './recipebook/rlist/ritem/ritem.component';
import { SeditComponent } from './shoppinglist/sedit/sedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    RlistComponent,
    RdetailComponent,
    RitemComponent,
    SeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
