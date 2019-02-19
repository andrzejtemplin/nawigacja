import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Game } from '../game';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnDestroy, OnInit {

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  goBackToGames() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.game = JSON.parse(this.route.snapshot.params.gameByGenre)
  }

  ngOnDestroy() {
    console.log('DetailsPage destroyed');
  }

}
