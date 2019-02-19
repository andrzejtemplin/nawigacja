import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Game } from '../game';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {

  game: Game;

  constructor(
    private actRoute: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
   this.game = JSON.parse(this.actRoute.snapshot.params.details);
  }

  ngOnDestroy() {
    console.log('DetailsPage destroyed');
  }

  goBackToGames() {
    this.navCtrl.back();
  }

}
