import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/generated-model/model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(products=>this.products = products);
  }

}
