import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Product } from '../models/product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _products: Product[] = [
    {
      id: 1,
      name: 'Black T-Shirt',
      description: 'A women\'s t-shirt in the color: black.',
      title: 'Black T-Shirt - Women\'s T-Shirt - BASICS_SKU_001 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_black.jpg',
      image: 'products\\women\\womens_tshirt_black.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 2,
      name: 'White T-Shirt',
      description: 'A women\'s t-shirt in the color: white.',
      title: 'White T-Shirt - Women\'s T-Shirt - BASICS_SKU_002 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_white.jpg',
      image: 'products\\women\\womens_tshirt_white.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 3,
      name: 'Navy T-Shirt',
      description: 'A women\'s t-shirt in the color: navy.',
      title: 'Navy T-Shirt - Women\'s T-Shirt - BASICS_SKU_003 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_navy.jpg',
      image: 'products\\women\\womens_tshirt_navy.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 4,
      name: 'Mint T-Shirt',
      description: 'A women\'s t-shirt in the color: mint.',
      title: 'Mint T-Shirt - Women\'s T-Shirt - BASICS_SKU_004 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_mint.jpg',
      image: 'products\\women\\womens_tshirt_mint.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 5,
      name: 'Babypink T-Shirt',
      description: 'A women\'s t-shirt in the color: babypink.',
      title: 'Babypink T-Shirt - Women\'s T-Shirt - BASICS_SKU_005 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_babypink.jpg',
      image: 'products\\women\\womens_tshirt_babypink.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 6,
      name: 'Babyblue T-Shirt',
      description: 'A women\'s t-shirt in the color: babyblue.',
      title: 'Babyblue T-Shirt - Women\'s T-Shirt - BASICS_SKU_006 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_babyblue.jpg',
      image: 'products\\women\\womens_tshirt_babyblue.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 7,
      name: 'Turquoise T-Shirt',
      description: 'A women\'s t-shirt in the color: turquoise.',
      title: 'Turquoise T-Shirt - Women\'s T-Shirt - BASICS_SKU_007 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_turquoise.jpg',
      image: 'products\\women\\womens_tshirt_turquoise.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 8,
      name: 'Fiery Red T-Shirt',
      description: 'A women\'s t-shirt in the color: fiery red.',
      title: 'Fiery Red T-Shirt - Women\'s T-Shirt - BASICS_SKU_008 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\women\\womens_tshirt_fiery_red.jpg',
      image: 'products\\women\\womens_tshirt_fiery_red.jpg',
      categoryId: 1,
      price: 9.95
    },
    {
      id: 9,
      name: 'Black T-Shirt',
      description: 'A men\'s t-shirt in the color: black.',
      title: 'Black T-Shirt - Men\'s T-Shirt - BASICS_SKU_009 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_black.jpg',
      image: 'products\\men\\mens_tshirt_black.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 10,
      name: 'White T-Shirt',
      description: 'A men\'s t-shirt in the color: white.',
      title: 'White T-Shirt - Men\'s T-Shirt - BASICS_SKU_010 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_white.jpg',
      image: 'products\\men\\mens_tshirt_white.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 11,
      name: 'Navy T-Shirt',
      description: 'A men\'s t-shirt in the color: navy.',
      title: 'Navy T-Shirt - Men\'s T-Shirt - BASICS_SKU_011 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_navy.jpg',
      image: 'products\\men\\mens_tshirt_navy.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 12,
      name: 'Darkgreen T-Shirt',
      description: 'A men\'s t-shirt in the color: darkgreen.',
      title: 'Darkgreen T-Shirt - Men\'s T-Shirt - BASICS_SKU_012 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_darkgreen.jpg',
      image: 'products\\men\\mens_tshirt_darkgreen.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 13,
      name: 'Yellow T-Shirt',
      description: 'A men\'s t-shirt in the color: yellow.',
      title: 'Yellow T-Shirt - Men\'s T-Shirt - BASICS_SKU_013 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_yellow.jpg',
      image: 'products\\men\\mens_tshirt_yellow.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 14,
      name: 'Orange T-Shirt',
      description: 'A men\'s t-shirt in the color: orange.',
      title: 'Orange T-Shirt - Men\'s T-Shirt - BASICS_SKU_014 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_orange.jpg',
      image: 'products\\men\\mens_tshirt_orange.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 15,
      name: 'Darkgrey T-Shirt',
      description: 'A men\'s t-shirt in the color: darkgrey.',
      title: 'Darkgrey T-Shirt - Men\'s T-Shirt - BASICS_SKU_015 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_darkgrey.jpg',
      image: 'products\\men\\mens_tshirt_darkgrey.jpg',
      categoryId: 2,
      price: 9.95
    },
    {
      id: 16,
      name: 'Darkred T-Shirt',
      description: 'A men\'s t-shirt in the color: darkred.',
      title: 'Darkred T-Shirt - Men\'s T-Shirt - BASICS_SKU_016 - Buy now on SSR Demo t-shirt shop',
      thumbnail: 'products\\men\\mens_tshirt_darkred.jpg',
      image: 'products\\men\\mens_tshirt_darkred.jpg',
      categoryId: 2,
      price: 9.95
    },
  ];

  getProductsBycategory(categoryId: number): Observable<Product[]> {
    const data$ = new Observable<Product[]>(observer => {
      observer.next(this._products.filter(item => item.categoryId === categoryId));
      observer.complete();
    });

    return data$.pipe(
      delay(3000)
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    const data$ = new Observable<Product| undefined>(observer => {
      observer.next(this._products.find(item => item.id === id) ?? undefined);
      observer.complete();
    });

    return data$.pipe(
      delay(1500)
    );
  }

}
