import { inject, Injectable } from '@angular/core';
import { Category } from '../models/category/category.interface';
import { ActivatedRouteSnapshot, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver {
 
  private categoryService = inject(CategoryService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Observable<Category | undefined>> {
    const id: number = parseInt(route.params['id'] ?? '0');

    return this.categoryService.getCategory(id);
  }

}