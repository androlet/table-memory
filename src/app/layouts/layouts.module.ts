import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageComponent } from './components/page/page.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../routing/routing.module';
import {ObjectsModule} from '../objects/objects.module';
import {CardsModule} from '../cards/cards.module';
import {MultiplicationsModule} from '../multiplications/multiplications.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    ObjectsModule,
    CardsModule,
    MultiplicationsModule
  ],
  declarations: [NavigationBarComponent, PageComponent],
  exports: [PageComponent]
})
export class LayoutsModule { }
