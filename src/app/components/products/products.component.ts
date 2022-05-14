import { Component, Input, OnInit } from '@angular/core';
import { ApiRestService } from './../../services/api-rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  constructor(private ApiRestService: ApiRestService) {}

  ngOnInit(): void {
    this.cargarData();
  }
  public cargarData() {
    this.ApiRestService.get(
      'https://apis-prueba.pruebasgt.com/api/products'
    ).subscribe((res) => {
      console.log(res);
      this.products = res;
      this.products = this.products.data;
      console.log(this.products);
    });
  }
}
