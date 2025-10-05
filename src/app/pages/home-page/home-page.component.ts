import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SetMetaTags } from '../../shared/set-meta-tags.component';
import { BasicData } from '../../models/shared/basic-data.interface';
import { LoadingDialogComponent } from '../../components/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, LoadingDialogComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends SetMetaTags implements OnInit {

  ngOnInit(): void {
    const metaData: BasicData = {
      name: 'Homepage of SSR Demo t-shirt Shop',
      title: 'SSR Demo t-shirt Shop - Buy colorfull T-Shirts online',
      description: 'SSR Demo t-shirt Shop - established in 2025 - online shop for colorfull T-Shirts'
    };

    this.setMetaTags(metaData);
  }

}