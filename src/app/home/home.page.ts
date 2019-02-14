import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{
  genres: string[] = ["RPG","Arcade"];
  constructor(private router:Router) {}

  ngOnDestroy() {
    console.log('HomePage destroyed');
  }
}
