import { inject, signal, WritableSignal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BasicData } from '../models/shared/basic-data.interface';

export class SetMetaTags {
  showLoadingDialog: WritableSignal<boolean> = signal(false);

  private meta = inject(Meta);
  private title = inject(Title);

  setMetaTags(data: BasicData): void {
    this.title.setTitle(`${data.name} - SSR Demo t-shirt Shop`);
    
    this.meta.updateTag({ 
      name: 'title', 
      content: data.title 
    });

    this.meta.updateTag({ 
      name: 'description', 
      content: data.description 
    });
  }

}
