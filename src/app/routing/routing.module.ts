import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {cardsRoutes} from '../cards/cards.routes';
import {multiplicationsRoutes} from "../multiplications/multiplications.routes";
import {objectsRoutes} from "../objects/objects.routes";

const routes: Routes = [
  ...objectsRoutes,
  ...cardsRoutes,
  ...multiplicationsRoutes,
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
