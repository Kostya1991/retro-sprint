import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { NglModule } from 'ng-lightning';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HighchartsChartModule,
    AppRoutingModule,
    NglModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
