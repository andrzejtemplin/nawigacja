import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit, OnDestroy {
  genres: string[] = ["RPG", "Action"];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('GenresPage destroyed');
  }

  navigateToGames(genre: string) {
    this.navCtrl.navigateForward(['/games', { genre: genre }]);
  };

}
