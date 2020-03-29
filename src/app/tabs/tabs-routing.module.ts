import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {BookService} from '../services/book.service';
import {AuthService} from '../services/auth.service';
import {AuthGuardService} from '../services/auth-guard.service';
import {ToastService} from '../services/toast.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'book-show/:id',
            loadChildren: () => import('../pages/book/book-show/book-show.module').then( m => m.BookShowPageModule)
          },
          {
            path: 'book-new',
            loadChildren: () => import('../pages/book/book-new/book-new.module').then( m => m.BookNewPageModule)
          },
        ],
        canActivate: [AuthGuardService]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'inscription',
            loadChildren: () => import('../pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    BookService,
    AuthService,
    AuthGuardService,
    ToastService
  ],
})
export class TabsPageRoutingModule {}
