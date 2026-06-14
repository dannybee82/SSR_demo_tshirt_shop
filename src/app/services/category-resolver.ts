import { inject, Service } from '@angular/core';
import { CategoryInterface } from '../models/category/category.interface';
import { ActivatedRouteSnapshot, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './category';

@Service()
export class CategoryResolver {
 
  private categoryService = inject(Category);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Observable<CategoryInterface | undefined>> {
    const id: number = parseInt(route.params['id'] ?? '0');

    return this.categoryService.getCategory(id);
  }

}