import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookIndexPageRoutingModule } from './book-index-routing.module';

import { BookIndexPage } from './book-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookIndexPageRoutingModule
  ],
  declarations: [BookIndexPage]
})
export class BookIndexPageModule {}
