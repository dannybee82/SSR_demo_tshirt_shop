import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver {

  private productService = inject(ProductService);
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | undefined> {
    const id: number = parseInt(route.params['id'] ?? '0');

    return this.productService.getProductById(id);
  }

}
