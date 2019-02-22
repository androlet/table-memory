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
import { CardsComponent } from './card/components/cards/cards.component';
import {CardSubtituteComponent} from './card/components/card-subtitute/card-subtitute.component';
import { CardAnswerSelectorComponent } from './card/components/card-answer-selector/card-answer-selector.component';
import { CardAnswerSelectorsComponent } from './card/components/card-answer-selectors/card-answer-selectors.component';
import {CardService} from './card/services/card.service';


@NgModule({
  declarations: [
    AppComponent,
    ListsManagerComponent,
    ElementComponent,
    RandomReaderComponent,
    CardsComponent,
    CardSubtituteComponent,
    CardAnswerSelectorComponent,
    CardAnswerSelectorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ElementService, RandomService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
