import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  products: Product[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(data=>{
      this.products=data;
    })
  }

  Editar (product:Product) {
    localStorage.setItem("id", product.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete (product:Product) {
    this.service.deleteProduct(product).subscribe(data=>{
      this.products=this.products.filter(p=>p!==product);
      alert("Producto eliminado con exito!");
    });
  }
}
