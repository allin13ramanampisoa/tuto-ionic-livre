import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookShowPageRoutingModule } from './book-show-routing.module';

import { BookShowPage } from './book-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookShowPageRoutingModule
  ],
  declarations: [BookShowPage]
})
export class BookShowPageModule {}
