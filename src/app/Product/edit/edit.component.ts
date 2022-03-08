import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:Product = new Product();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar () {
    let id =<String> localStorage.getItem("id");
    this.service.getProductById(+id).subscribe(data=>{
      this.product=data;
    });
  }

  Actualizar (product:Product) {
    this.service.updateProduct(product).subscribe(data=>{
      this.product = data;
      alert("El producto se actualizo con exito!");
      this.router.navigate(["listar"]);

    })
  }
}
