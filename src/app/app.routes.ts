import { Routes } from '@angular/router';
import { CategoryResolver } from './services/category-resolver.service';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductResolver } from './services/product-resolver.service';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
        resolve: { category: CategoryResolver }
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        resolve: { product: ProductResolver }
    }
];
