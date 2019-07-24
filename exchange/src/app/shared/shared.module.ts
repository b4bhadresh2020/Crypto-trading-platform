import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda/module/module';
import { ReCaptchaModule } from 'angular2-recaptcha/angular2-recaptcha';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import {
  PerfectScrollbarConfigInterface, PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ToastrModule } from 'ngx-toastr';
import { Common } from './common';
import { EightDigitDirective, NumberOnlyDirective } from './directive';
import { DateFormatPipe, DynamicDigitPipe, FilterArrayPipe, SplitString, TradeDatePipe, ZeroFilterPipe } from './pipes';
import './common/array-extensions';
import './common/date-extensions';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';

import { NgMarqueeModule } from 'ng-marquee';

import { NotifierModule, NotifierOptions } from 'angular-notifier';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

const pipes = [DateFormatPipe, DynamicDigitPipe, TradeDatePipe, FilterArrayPipe, SplitString, ZeroFilterPipe];

const directives = [EightDigitDirective, NumberOnlyDirective];


const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: false,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
};

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    // 3rd party
    AccordionModule.forRoot(),
    LaddaModule.forRoot({ style: 'zoom-in' }),
    PerfectScrollbarModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxQRCodeModule,
    ReCaptchaModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    NgMarqueeModule,
    DataTablesModule,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  declarations: [...pipes, ...directives],
  exports: [
    ...pipes,
    ...directives,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    LaddaModule,
    ModalModule,
    BsDatepickerModule,
    NgxQRCodeModule,
    PerfectScrollbarModule,
    ReCaptchaModule,
    ToastrModule,
    NgMarqueeModule,
    DataTablesModule,
    NotifierModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, Common]
})

export class SharedModule { }
