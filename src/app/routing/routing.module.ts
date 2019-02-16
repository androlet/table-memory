import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsManagerComponent} from '../components/lists-manager/lists-manager.component';
import {CardsComponent} from '../components/cards/cards.component';

const routes: Routes = [
  { path: 'random-objects', component: ListsManagerComponent },
  { path: 'random-cards', component: CardsComponent },
  { path: '', redirectTo: '/random-objects', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
