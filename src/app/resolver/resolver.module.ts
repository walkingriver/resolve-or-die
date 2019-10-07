import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResolverPage } from './resolver.page';
import { ErrorResolverService } from '../error-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ResolverPage,
    resolve: { pageData: ErrorResolverService}
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResolverPage]
})
export class ResolverPageModule {}
