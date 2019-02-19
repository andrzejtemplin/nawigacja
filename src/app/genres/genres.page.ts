import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit, OnDestroy {
  genres: string[] = ["RPG", "Action"];

  constructor(private navCtrl: NavController) { }

  goToGenre(item: string) {
    this.navCtrl.navigateForward(['/games', { genre: item }])
  }

  ngOnInit() {}
  
  ngOnDestroy() {
    console.log('GenresPage destroyed');
  }

}
