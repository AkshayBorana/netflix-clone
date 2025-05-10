import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { MovieList } from '../../core/models/movies.interface';

// const components = [HeaderComponent, BannerComponent, MovieCarouselComponent];
@Component({
  selector: 'app-browse',
  imports: [HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent implements OnInit {
  private moviesService = inject(MovieService);

  moviesList = signal<MovieList[]>([]);
  setMoviesList = computed(() => this.moviesList());

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    try {
      const data = await this.moviesService.fetchMovies();
      console.log(data);
      if(data && data['results'] && data['results']?.length) {
        const result = data.results.map((movie: MovieList) => {
          return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
        })
        console.log(result)
        this.moviesList.set(result);
      } else {
        this.moviesList.set([]);
      }
    } catch (error) {
      this.moviesList.set([]);
      console.log(error);
    }
  }
}
