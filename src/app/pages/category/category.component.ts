import { Component, makeStateKey, TransferState, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { SetMetaTags } from '../../shared/set-meta-tags.component';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { Category } from '../../models/category/category.interface';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product/product.interface';
import { LoadingDialogComponent } from '../../components/loading-dialog/loading-dialog.component';
import { CurrencyPipe } from '@angular/common';
import { HomeLogoComponent } from '../../components/home-logo/home-logo.component';

const CATEGORY__KEY = makeStateKey<Category>('category');

@Component({
  selector: 'app-category',
  imports: [RouterModule, LoadingDialogComponent, CurrencyPipe, HomeLogoComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent extends SetMetaTags implements OnInit {

  category: WritableSignal<Category | undefined> = signal(undefined);
  products: WritableSignal<Product[]> = signal([]);
  backgroundGradient: WritableSignal<string> = signal('');

  private transferState = inject(TransferState);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

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
      const category: Category = data['category'];

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
      next: (products: Product[]) => {
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