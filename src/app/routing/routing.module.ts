import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsManagerComponent} from '../components/lists-manager/lists-manager.component';
import {cardRoutes} from '../card/card.routes';

const routes: Routes = [
    ...cardRoutes,
  { path: 'random-objects', component: ListsManagerComponent },
  { path: '', redirectTo: '/random-cards', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
