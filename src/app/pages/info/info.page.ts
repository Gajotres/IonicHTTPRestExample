import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

	id: string;
	movie: {};

  	constructor(private movieService: MovieServiceService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		this.movie = this.movieService.getMovieFromCache(this.id);
	}

}
