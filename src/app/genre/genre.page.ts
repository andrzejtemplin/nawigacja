import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnDestroy {
  games: string[] = ["Fallout","The Legend of Zelda","League of legends"];
  
  constructor(private router:Router) {}

  goToDetails(item: string) {
    this.router.navigate(['/details',{game: item}])
  }

  ngOnDestroy() {
    console.log('GenrePage destroyed');
  }

}
