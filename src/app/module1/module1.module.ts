import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mcomp1Component } from './mcomp1/mcomp1.component';
import { RouterModule, Routes } from '@angular/router';
import { Mcomp2Component } from './mcomp2/mcomp2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Mcomp11Component } from './mcomp1/mcomp11/mcomp11.component';
import { Mcomp12Component } from './mcomp1/mcomp12/mcomp12.component';

const routes: Routes = [
  {
    path: 'dasbhoard',
    component: DashboardComponent,
    children: [
      {
        path: 'mcomp1/:id',
        component: Mcomp1Component,
        children: [
          {
            path: 'mcomp11',
            component: Mcomp11Component,
          },
          {
            path: 'mcomp12',
            component: Mcomp12Component,
          },
          {
            path: '',
            redirectTo: 'mcomp11',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'mcomp2',
        component: Mcomp2Component,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dasbhoard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Mcomp1Component, Mcomp2Component, DashboardComponent],
})
export class Module1Module {}
