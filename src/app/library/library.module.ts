import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { FormComponent } from './pages/form/form.component';
import { BookListComponent } from './pages/book-list/book-list.component';


@NgModule({
  declarations: [LibraryComponent, FormComponent, BookListComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
