import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class ToastService {

  constructor(public notifierService: NotifierService) {
  }

  success(message: any) {
    this.notifierService.notify("success", message);
  }

  warning(message: any) {
    this.notifierService.notify("warning", message);
  }

  error(message: any) {
    this.notifierService.notify("error", message);
  }
}

