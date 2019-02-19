import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Game } from '../game';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit, OnDestroy {

  allGames: any[] = [
    { title: "Fallout", genre: "RPG", platform: "PC" },
    { title: "The Legend of Zelda", genre: "RPG", platform: "Nintendo switch" },
    { title: "League of legends", genre: "RPG", platform: "PC" },
    { title: "Battlefield IV", genre: "Action", platform: "Sony PS" },
  ];

  games: Game[];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  goToDetails(game: Game) {
    this.navCtrl.navigateForward(['/details', { gameByGenre: JSON.stringify(game) }])
  }

  goBackToGenres() {
    this.navCtrl.back();
  }

  ngOnInit() {  
    this.games = this.allGames.filter(item => item.genre == this.route.snapshot.params.genre).slice();
  }

  ngOnDestroy() {
    console.log('GamesPage destroyed');
  }

}
