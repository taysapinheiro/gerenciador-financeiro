import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private _snackBar = inject(MatSnackBar);

  success(message: string) {
    this._snackBar.open(message, 'Fechar', {
      panelClass: 'snackbar-success-feedback',
    });
  }

  error(message: string) {
    this._snackBar.open(message, 'Fechar', {
      panelClass: 'snackbar-error-feedback',
    });
  }
}
