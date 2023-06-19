import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LibraryService } from 'src/app/services/library.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ILibrary } from '../library.interface';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  library$: Observable<ILibrary[]>;

  constructor(
    private libraryService: LibraryService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.library$ = this.libraryService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar informações');
        return of([]);
      }),
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['register'], { relativeTo: this.route });
  }
}
