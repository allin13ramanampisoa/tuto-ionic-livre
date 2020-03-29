import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookShowPage } from './book-show.page';

const routes: Routes = [
  {
    path: '',
    component: BookShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookShowPageRoutingModule {}
