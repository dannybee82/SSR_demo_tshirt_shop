import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SetMetaTags } from '../../shared/set-meta-tags';
import { BasicData } from '../../models/shared/basic-data.interface';
import { LoadingDialog } from '../../components/loading-dialog/loading-dialog';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, LoadingDialog],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage extends SetMetaTags implements OnInit {

  ngOnInit(): void {
    const metaData: BasicData = {
      name: 'Homepage of SSR Demo t-shirt Shop',
      title: 'SSR Demo t-shirt Shop - Buy colorfull T-Shirts online',
      description: 'SSR Demo t-shirt Shop - established in 2025 - online shop for colorfull T-Shirts'
    };

    this.setMetaTags(metaData);
  }

}