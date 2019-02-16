import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListsManagerComponent } from './components/lists-manager/lists-manager.component';
import { ElementComponent } from './components/element/element.component';
import {ElementService} from './services/element.service';
import {FormsModule} from '@angular/forms';
import { RandomReaderComponent } from './components/random-reader/random-reader.component';
import {RandomService} from './services/random.service';
import {RoutingModule} from './routing/routing.module';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsManagerComponent,
    ElementComponent,
    RandomReaderComponent,
    CardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ElementService, RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
