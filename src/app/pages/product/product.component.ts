import { Component, inject, makeStateKey, OnInit, signal, TransferState, WritableSignal } from '@angular/core';
import { SetMetaTags } from '../../shared/set-meta-tags.component';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { Product } from '../../models/product/product.interface';
import { LoadingDialogComponent } from '../../components/loading-dialog/loading-dialog.component';
import { CurrencyPipe } from '@angular/common';
import { HomeLogoComponent } from '../../components/home-logo/home-logo.component';

const PRODUCT__KEY = makeStateKey<Product>('product');

@Component({
  selector: 'app-product',
  imports: [RouterModule, LoadingDialogComponent, CurrencyPipe, HomeLogoComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent extends SetMetaTags implements OnInit {

  product: WritableSignal<Product | undefined> = signal(undefined);

  private transferState = inject(TransferState);
  private activatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    // Check if data exists from server - prevent duplicate requests.
    const product = this.transferState.get(PRODUCT__KEY, null);

    if(product) {
      this.setMetaTags(product);
    } else {
      // Fetch data (only happens on client if not SSR)
      this.activatedRoute.data.subscribe((data: Data) => {
      const product: Product = data['product'];

      if(product) {
          this.setMetaTags(product);
          this.product.set(product);
        }
      });
    }
  }

} 
