import { Component, makeStateKey, TransferState, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { SetMetaTags } from '../../shared/set-meta-tags';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { CategoryInterface } from '../../models/category/category.interface';
import { Product } from '../../services/product';
import { ProductInterface } from '../../models/product/product.interface';
import { LoadingDialog } from '../../components/loading-dialog/loading-dialog';
import { CurrencyPipe } from '@angular/common';
import { HomeLogo } from '../../components/home-logo/home-logo';

const CATEGORY__KEY = makeStateKey<CategoryInterface>('category');

@Component({
  selector: 'app-category',
  imports: [RouterModule, LoadingDialog, CurrencyPipe, HomeLogo],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category extends SetMetaTags implements OnInit {

  category: WritableSignal<CategoryInterface | undefined> = signal(undefined);
  products: WritableSignal<ProductInterface[]> = signal([]);
  backgroundGradient: WritableSignal<string> = signal('');

  private transferState = inject(TransferState);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(Product);

  ngOnInit(): void {
    // Check if data exists from server - prevent duplicate requests.
    const category = this.transferState.get(CATEGORY__KEY, null);

    if(category) {
      // Use server data
      this.setMetaTags(category);
    } else {
      this.showLoadingDialog.set(true);

      // Fetch data (only happens on client if not SSR)
      this.activatedRoute.data.subscribe((data: Data) => {
      const category: CategoryInterface = data['category'];

      if(category) {
          this.setMetaTags(category);
          this.category.set(category);
          this.getProducts(category.id);

          if(category.id) {
            this.backgroundGradient.set(`category-${category.id}`);
          }
        }
      });
    }
  }

  private getProducts(categoryId: number): void {
    this.productService.getProductsBycategory(categoryId).subscribe({
      next: (products: ProductInterface[]) => {
        this.products.set(products);
      },
      error: () => {

      },
      complete: () => {
        this.showLoadingDialog.set(false);
      }
    });
  }

}