import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnDestroy, OnInit {

  game: string;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.game = this.actRoute.snapshot.params.game
  }

  ngOnDestroy() {
    console.log('DetailsPage destroyed');
  }

}
