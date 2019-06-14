import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies } from '../services/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
 
	apiURL: string = 'http://api.themoviedb.org/3/search/movie?query=&query=';
	apiKey: string = 'api_key=5fbddf6b517048e25bc3ac1bbeafb919';
	movies: any = [];

	constructor(private http: HttpClient) { 

	}

	searchMovies(movieName: string) {
		return this.http.get<any>(`${this.apiURL}` + encodeURI(movieName) + `&${this.apiKey}`).pipe(
    		map(model => {
    				this.movies = model.results;
		      		return model.results;
    			}
    		)
    	);	
	}

	getMovieFromCache(id: string) {
		let cachedMovie = null;

	    this.movies.forEach(movie => {
			if (movie.id == id) {
				cachedMovie = movie;
	      	}
	    });

	    console.log(cachedMovie);

	    return cachedMovie;
	}
}