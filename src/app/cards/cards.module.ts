import {NgModule} from '@angular/core';
import {CardsComponent} from './components/cards/cards.component';
import {CardSubtituteComponent} from './components/card-subtitute/card-subtitute.component';
import {CardAnswerSelectorComponent} from './components/card-answer-selector/card-answer-selector.component';
import {CardAnswerSelectorsComponent} from './components/card-answer-selectors/card-answer-selectors.component';
import {ReaderComponent} from './components/reader/reader.component';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from '../routing/routing.module';
import {RandomService} from '../services/random.service';
import {CardService} from './services/card.service';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CardsComponent,
    ReaderComponent,
    CardSubtituteComponent,
    CardAnswerSelectorComponent,
    CardAnswerSelectorsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [RandomService, CardService],
  exports: [CardsComponent]
})
export class CardsModule { }
