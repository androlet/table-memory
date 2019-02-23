import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ListsManagerComponent} from './components/lists-manager/lists-manager.component';
import {ElementComponent} from './components/element/element.component';
import {ElementService} from './services/element.service';
import {FormsModule} from '@angular/forms';
import {RandomReaderComponent} from './components/random-reader/random-reader.component';
import {RandomService} from './services/random.service';
import {RoutingModule} from './routing/routing.module';
import {CardService} from './card/services/card.service';
import {CardModule} from './card/card.module';


@NgModule({
  declarations: [
    AppComponent,
    ListsManagerComponent,
    ElementComponent,
    RandomReaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    CardModule
  ],
  providers: [ElementService, RandomService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
