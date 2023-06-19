import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.formBuilder.group({
    name: [''],
    author: [''],
    description: [''],
    registerDate: [''],
    updateDate: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: LibraryService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {
    // this.form
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.service.onSave(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError(),
    );
  }

  private onSuccess() {
    this.snackBar.open('Obra cadastrada com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao cadastrar obra!', '', { duration: 3000 });
  }

  ngOnInit(): void {}
}
