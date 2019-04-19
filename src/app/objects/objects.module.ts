import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListsManagerComponent} from "./components/lists-manager/lists-manager.component";
import {ElementComponent} from "./components/element/element.component";
import {RandomReaderComponent} from "./components/random-reader/random-reader.component";
import {ElementService} from "./services/element.service";
import {RandomService} from "../services/random.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ElementComponent, RandomReaderComponent, ListsManagerComponent],
  providers: [ElementService, RandomService],
  exports: [ListsManagerComponent]
})
export class ObjectsModule { }
