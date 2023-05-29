import { from, Observable } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

export interface DialogOptions {
  message: string,
  type: Dialogtype,
  isHTML?: boolean
}

export const enum Dialogtype {
  warning = 'warning',
  error = 'error',
  success = 'success',
  info = 'info',
  question = 'question'
}
export default Dialogtype;

export abstract class Dialog {         

  public static show(message: string, type: Dialogtype, isHTML?: boolean): Observable<any> {

    return from(this.openDialog({message, type, isHTML}));
  }

  private static openDialog(options: DialogOptions): Promise<any> {

    return new Promise((resolve) => {

      let title = '';

      switch (options.type) {
        case Dialogtype.success:
          title = "¡Éxito!"
          break;
        case Dialogtype.error:
          title = "Error!"
          break;
        case Dialogtype.warning:
          title = "Alerta!"
          break;
        case Dialogtype.info:
          title = ""
          break;
        case Dialogtype.question:
          title = ""
          break;
      }

      if (options.type == Dialogtype.question) {
        Swal.fire({
          title: title,
          text: options.message,
          icon: options.type as SweetAlertIcon,
          confirmButtonText: 'Aceptar',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          backdrop: false,
          allowOutsideClick: false,
          customClass: {
            confirmButton: 'btn-alert'
          }
        }).then((result) => {

          if (result.isConfirmed) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
      else {

        Swal.fire({
          title: title,
          text: options.message,
          icon: options.type as SweetAlertIcon,
          confirmButtonText: 'Aceptar',
          backdrop: false,
          allowOutsideClick: false,
          html: options.isHTML ? options.message : undefined,
          customClass: {
            confirmButton: 'btn btn-primary'
          }
        }).then(() => {
          resolve(true);
        });
      }

    });

  }

}