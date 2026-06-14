import { Routes } from '@angular/router';
import { CategoryResolver } from './services/category-resolver';
import { Category } from './pages/category/category';
import { Product } from './pages/product/product';
import { ProductResolver } from './services/product-resolver';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'category/:id',
        component: Category,
        resolve: { category: CategoryResolver }
    },
    {
        path: 'product/:id',
        component: Product,
        resolve: { product: ProductResolver }
    }
];
