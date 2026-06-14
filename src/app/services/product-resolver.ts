import { inject, Service } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductInterface } from '../models/product/product.interface';

@Service()
export class ProductResolver {

  private productService = inject(Product);
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface | undefined> {
    const id: number = parseInt(route.params['id'] ?? '0');

    return this.productService.getProductById(id);
  }

}