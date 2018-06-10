import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListsManagerComponent } from './components/lists-manager/lists-manager.component';
import { ElementComponent } from './components/element/element.component';
import {ElementService} from './services/element.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListsManagerComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
