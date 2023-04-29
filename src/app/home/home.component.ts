import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist/watchlist.service';
import { Movie } from '../shared/movie.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private watchlistService: WatchlistService) {}
  watchlistMovies: Movie[] = [];
  // ngOnInit() {
  //   this.watchlistService.movies.subscribe(
  //     (      movies: Movie[]) => {
  //     console.log("movies")
  //     console.log(movies)
  //     this.watchlistMovies = movies;
  //   })
  // }
}
