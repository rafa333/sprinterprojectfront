import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Product/listar/listar.component';
import { AddComponent } from './Product/add/add.component';
import { EditComponent } from './Product/edit/edit.component';
import { FormsModule }from '@angular/forms'
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http'; '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
