import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
