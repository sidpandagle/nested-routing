import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Module1Module } from './module1/module1.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module1/module1.module').then((m) => m.Module1Module),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Module1Module,
    // RouterModule.forChild(routes),
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
