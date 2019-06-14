import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { InfoPage } from '../info/info.page';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

    movies: any[];
 
    constructor(private movieService: MovieServiceService, private router: Router) {
 
    }
 
    searchForMovie(event, key) {
        if(event.target.value.length > 2) {
		    this.movieService.searchMovies(event.target.value).subscribe((res)=>{
		    	this.movies = res;
		    });
        }
    }  
     
    selectMovie(event, movie) {
        console.log(movie);
        this.router.navigateByUrl('/info/' + movie.id);
    }
}