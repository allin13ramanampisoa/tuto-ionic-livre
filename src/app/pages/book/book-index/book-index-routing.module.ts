import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookIndexPage } from './book-index.page';

const routes: Routes = [
  {
    path: '',
    component: BookIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookIndexPageRoutingModule {}
