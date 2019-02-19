import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Game } from '../Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit, OnDestroy {

  allGames: Game[] = [
    { title: "Fallout", genre: "RPG", platform: "PC" },
    { title: "The Legend of Zelda", genre: "RPG", platform: "Nintendo Switch" },
    { title: "League of legends", genre: "RPG", platform: "PC" },
    { title: "Battlefield IV", genre: "Action", platform: "PS4" },
  ];

  games: Game[];

  constructor(
    private navCtrl: NavController,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.games = this.allGames.filter(game => game.genre == this.actRoute.snapshot.params.genre).slice();
  }

  ngOnDestroy() {
    console.log('GamesPage destroyed');
  }

  goToDetails(item: Game) {
    this.navCtrl.navigateForward(['details', { details: JSON.stringify(item) }]);
  }

  goBackToGenres() {
    this.navCtrl.back();
  }

}
