import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialImportsModule } from './app-material-imports/app-material-imports.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe],
  imports: [CommonModule, AppMaterialImportsModule],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
