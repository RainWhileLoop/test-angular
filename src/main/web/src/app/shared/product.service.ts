import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../generated-model/model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }

  getAll():Observable<Product[]> {
    return this.http.get<Product[]>('api/product');
  }
}
