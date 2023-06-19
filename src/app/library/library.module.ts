import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [LibraryComponent, FormComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    AppMaterialImportsModule,
    SharedModule,
  ],
})
export class LibraryModule {}
