import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/Http/http.service';
import { RequestInterceptorService } from './services/Http/request-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ResponseInterceptorService } from './services/Http/response-interceptor.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { RowComponent } from './components/row/row.component';
import { ColComponent } from './components/col/col.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardBodyComponent } from './components/card-body/card-body.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './components/charts/charts/charts.component';


const Modules = [
  CommonModule,
  // NgbModule,
  BrowserModule,
  HttpClientModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxChartsModule,
  BrowserAnimationsModule,

];

const Components = [
  NotFoundComponent,
  HeaderComponent,
  ContainerComponent,
  RowComponent,
  ColComponent,
  FooterComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  CardBodyComponent,
  ChartsComponent
];

const services: Provider[] = [
  HttpService,
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true },
];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  exports: [
    ...Modules,
    ...Components
  ],
  providers: [
    ...services
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: services
    };
  }
}
