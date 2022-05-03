import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', loadChildren: () => import('./books/books.module')
      .then(m => m.BooksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
