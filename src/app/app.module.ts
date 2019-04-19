import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RoutingModule} from './routing/routing.module';
import {CardsModule} from './cards/cards.module';
import {MultiplicationsModule} from './multiplications/multiplications.module';
import {ObjectsModule} from './objects/objects.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    ObjectsModule,
    CardsModule,
    MultiplicationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
