import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestScoreManager } from './app.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BestScoreManager
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
