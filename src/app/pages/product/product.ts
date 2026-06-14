import { Component, inject, makeStateKey, OnInit, signal, TransferState, WritableSignal } from '@angular/core';
import { SetMetaTags } from '../../shared/set-meta-tags';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { ProductInterface } from '../../models/product/product.interface';
import { LoadingDialog } from '../../components/loading-dialog/loading-dialog';
import { CurrencyPipe } from '@angular/common';
import { HomeLogo } from '../../components/home-logo/home-logo';

const PRODUCT__KEY = makeStateKey<ProductInterface>('product');

@Component({
  selector: 'app-product',
  imports: [RouterModule, LoadingDialog, CurrencyPipe, HomeLogo],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product extends SetMetaTags implements OnInit {

  product: WritableSignal<ProductInterface | undefined> = signal(undefined);

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
      const product: ProductInterface = data['product'];

      if(product) {
          this.setMetaTags(product);
          this.product.set(product);
        }
      });
    }
  }

} 