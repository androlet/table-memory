import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListsManagerComponent } from './components/lists-manager/lists-manager.component';
import { ElementComponent } from './components/element/element.component';
import {ElementService} from './services/element.service';
import {FormsModule} from '@angular/forms';
import { RandomReaderComponent } from './components/random-reader/random-reader.component';
import {RandomService} from "./services/random.service";


@NgModule({
  declarations: [
    AppComponent,
    ListsManagerComponent,
    ElementComponent,
    RandomReaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ElementService, RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
