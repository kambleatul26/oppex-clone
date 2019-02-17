import { Injectable } from '@angular/core';
import { Products } from './Products';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getProducts(): Product[] {

    return Products;
  }
  constructor() { }



}
