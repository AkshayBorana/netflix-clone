import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  imports: [HeaderComponent, BannerComponent],
})
export class BrowseComponent implements OnInit {
  private moviesService = inject(MovieService);

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    try {
      const data = await this.moviesService.fetchMovies();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
