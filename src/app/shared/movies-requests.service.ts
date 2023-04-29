import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movie.module';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestsService {
  constructor(private http: HttpClient) {
    const watchlistUrl = "https://movies-guide-eb5a7-default-rtdb.firebaseio.com/movies.json";
    const favoritesUrl = "https://favorite-movies-f80e3-default-rtdb.firebaseio.com/favorites.json";
    const watchedUrl = "https://watched-movies-36f2a-default-rtdb.firebaseio.com/watched.json";
    // --------------- Watched --------------------
    this.getMovies(watchedUrl).subscribe(
      movies => {
        console.log("watched works!")
        if (movies === null) {
          movies = []
        }
      return this.watchedMovies = movies;
      })
    // --------------- Watchlist --------------------
    this.getMovies(watchlistUrl).subscribe(
      movies => {
        console.log("watchlist works!")
        if (movies === null) {
          movies = []
        }
      return this.watchlistMovies = movies;
      })
    // --------------- Favorites --------------------
    this.getMovies(favoritesUrl).subscribe(
      movies => {
        console.log("favorites works!")
        if (movies === null) {
          movies = []
        }
      return this.favoriteMovies = movies;
    })
    // this.getMoviesToCheck(favoritesUrl, this.favoriteMovies)
  }
  //

  // we should have all movies here to see if the new movie already exits

  watchedMovies: Movie[] = [];
  watchlistMovies: Movie[] = [];
  favoriteMovies: Movie[] = [];

  savedMovies: Movie[] = [];
  url!: string;
  // we need fetched movies ###########
  saveMovies(newMovie: Movie, url: string, store: string) {
    // -----------------------------------
    // check where we store the data
    const WATCHLIST = "watchlist"
    const FAVORITE = "favorite"
    const WATCHED = "watched"
    if (store === WATCHED) {
      this.savedMovies = this.watchedMovies
    } else if (store === WATCHLIST) {
      this.savedMovies = this.watchlistMovies
    } else if (store === FAVORITE) {
      this.savedMovies = this.favoriteMovies
    }

    // -----------------------------------
    // check if the new movie already exits
    const movieExists = this.savedMovies.some(movie => movie.name === newMovie.name);
    console.log(movieExists)
    if (!movieExists) {
      console.log("Added")
      // send data to dataBase
      // REQUEST
      this.savedMovies.push(newMovie)
      console.log("###########")
      console.log(this.savedMovies)
      console.log("###########")
      this.http.put<Movie[]>(url, this.savedMovies).subscribe()
    } else {
      console.log("Movie already added")
    }
  }

  // pipe to control key in response Data
  getMovies(url: string) {
    // send data
    // const url = "https://movies-guide-eb5a7-default-rtdb.firebaseio.com/movies.json";  // Firebase add movies.json to add file
    return this.http.get<Movie[]>(url)
  }

  deleteMovie(movie: Movie, componentName: string) {
    // const url: string ='';
    // logic

    // #1
    // get list of exist movies
    // #2
    // delete the movie
    // #3
    // send updated list


    // know which component we work with and get it's movie
    this.identfiyWhichComponent(componentName)
    // delete the movie
    this.savedMovies = this.savedMovies.filter((moviee) =>
      moviee.name !== movie.name
      )
    console.log(this.savedMovies)
    this.http.put(this.url, this.savedMovies).subscribe()
  }




  identfiyWhichComponent(componentName: string) {
    const WATCHED = "watched"
    const WATCHLIST = "watchlist"
    const FAVORITE = "favorite"
    const watchedUrl = "https://watched-movies-36f2a-default-rtdb.firebaseio.com/watched.json";
    const watchlistUrl = "https://movies-guide-eb5a7-default-rtdb.firebaseio.com/movies.json";
    const favoritesUrl = "https://favorite-movies-f80e3-default-rtdb.firebaseio.com/favorites.json";
    if (componentName === WATCHED) {
      this.savedMovies = this.watchedMovies;
      this.url = watchedUrl;
    } else if (componentName === WATCHLIST) {
      this.savedMovies = this.watchlistMovies
      this.url = watchlistUrl;
    } else if (componentName === FAVORITE) {
      this.savedMovies = this.favoriteMovies
      this.url = favoritesUrl;
    }
  }

  getMoviesToCheck(url: string, store: Movie[]) {
    this.getMovies(url).subscribe(
      movies => {
        console.log("favorites works")
        if (movies === null) {
          movies = []
        }
      return store = movies;
    }
    )
  }
}














// updatedMovies in database for watchlist


// send from home to watchlist database






// updatedMovies: Movie[] = [
//   {
//     name: 'Whiplash',
//     description: '',
//     year: '2017',
//     posterimagePath: 'https://i.etsystatic.com/36067604/r/il/4355d2/4230665308/il_fullxfull.4230665308_r13v.jpg',
//     MovieTime: '2h'
//   },
//   {
//     name: 'Blade Runner',
//     description: '',
//     year: '2017',
//     posterimagePath: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg',
//     MovieTime: '2h'
//   }
// ];
// movies = new BehaviorSubject<Movie[]>(this.updatedMovies);





// .subscribe(
//   recipes => {
//     this.loadedRecipes = recipes;
//     //   Update Recipes
//     for (const i in this.loadedRecipes) { // this.loadedRecipes[i] = recipe
//       if (!namesList.includes(this.loadedRecipes[i].name)) {
//   // --
//   this.recipe = this.loadedRecipes[i];
//   this.recipeService.addRecipe(this.recipe);
//   // ---
//       }
//     }
//   console.log(this.loadedRecipes)
//       }
//   );
//       .pipe(
//   map(responseData => {
//   // put data in array
//   const recipesArray = [];
//   for (const key in responseData) {
//     if (responseData.hasOwnProperty(key)) {
//       recipesArray.push({...(responseData as any)[key]})
//     }
//   }
//   return recipesArray;
// }))


// watchlist: Movie[] = [
//   {
//     name: 'Whiplash',
//     description: '',
//     year: '2017',
//     posterimagePath: 'https://i.etsystatic.com/36067604/r/il/4355d2/4230665308/il_fullxfull.4230665308_r13v.jpg',
//     MovieTime: '2h'
//   }
// ];
