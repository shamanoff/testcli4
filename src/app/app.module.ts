import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { TestTComponent } from './test-t/test-t.component';
import { PropComponent } from './prop.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    TestTComponent,
    PropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
