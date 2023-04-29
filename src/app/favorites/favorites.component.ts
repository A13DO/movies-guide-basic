import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WatchlistService } from '../watchlist/watchlist.service';
import { Movie } from '../shared/movie.module';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor(private watchlistService: WatchlistService) {}
  mySub: Subscription = new Subscription;
  favoriteMovies: Movie[] = [];
  favoritesUrl = "https://favorite-movies-f80e3-default-rtdb.firebaseio.com/favorites.json"
  FAVORITE = "favorite"
  ngOnInit() {
    console.log('Hello From Watchlist')
    this.mySub =
    this.watchlistService.getMovies(this.favoritesUrl).subscribe(
      movies => {
        this.favoriteMovies = movies
      console.log(movies)
    })
  }
  ngOnDestroy() {

  }
}
