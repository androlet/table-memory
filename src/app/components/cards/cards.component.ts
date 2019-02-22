import {Component, OnInit} from '@angular/core';
import {CardsSolution} from '../../models/card';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  solution: CardsSolution;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.solution = new CardsSolution(this.cardService.getShuffledDeck());
  }

}
