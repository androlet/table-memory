import {NgModule} from '@angular/core';
import {CardsComponent} from './components/cards/cards.component';
import {CardSubtituteComponent} from './components/card-subtitute/card-subtitute.component';
import {CardAnswerSelectorComponent} from './components/card-answer-selector/card-answer-selector.component';
import {CardAnswerSelectorsComponent} from './components/card-answer-selectors/card-answer-selectors.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from '../routing/routing.module';
import {RandomService} from '../services/random.service';
import {CardService} from './services/card.service';

@NgModule({
  declarations: [
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
  providers: [RandomService, CardService]
})
export class CardModule { }
