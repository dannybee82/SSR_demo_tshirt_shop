import { Injectable } from '@angular/core';
import { Category } from '../models/category/category.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private _categories: Category[] = [
    {
      id: 1,
      name: 'Women\'s t-shirts',
      title: 'Women\'s t-shirts - SSR Demo t-shirt shop',
      description: 'Buy now different Women\'s t-shirts online at the SSR Demo t-shirt shop',
      bannerImage: 'banners\\womens_tshirts.png',      
    },
    {
      id: 2,
      name: 'Men\'s t-shirts',
      title: 'Men\'s t-shirts - SSR Demo t-shirt shop',
      description: 'Buy now different Men\'s t-shirts online at the SSR Demo t-shirt shop',
      bannerImage: 'banners\\mens_tshirts.png',      
    }    
  ];

  getCategory(id: number): Observable<Category | undefined> {
    const data$ = new Observable<Category| undefined>(observer => {
      observer.next(this._categories.find(item => item.id === id) ?? undefined);
      observer.complete();
    });
    
    return data$.pipe(
      delay(1500)
    );
  }

}
