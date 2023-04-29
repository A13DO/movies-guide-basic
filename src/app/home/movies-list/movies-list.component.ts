import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/movie.module';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  movies: Movie[] = [
    {
      name: 'Blade Runner 2046',
      description: '',
      year: '2017',
      posterimagePath: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg',
      MovieTime: '2h'
    },
    {
      name: 'Taxi Driver',
      description: '',
      year: '1976',
      posterimagePath: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      MovieTime: '1h 54m'
    },
    {
      name: 'Whiplash',
      description: '',
      year: '2017',
      posterimagePath: 'https://i.etsystatic.com/36067604/r/il/4355d2/4230665308/il_fullxfull.4230665308_r13v.jpg',
      MovieTime: '2h'
    },
    {
      name: 'Her',
      description: '',
      year: '2013',
      posterimagePath: 'https://alternativemovieposters.com/wp-content/uploads/2015/08/her.jpg',
      MovieTime: '2h'
    }
  ]
}
