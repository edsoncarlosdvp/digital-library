import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LibraryService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      author: [null],
      description: [null],
      registerDate: [null],
      updateDate: [null],
    });
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
