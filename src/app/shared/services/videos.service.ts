import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

const options = {
  options: {
    include_adult: true,
    include_video: true,
    page: 1,
    language: 'en-US',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'applications/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDNhMGRhYzc1NjE5Mzc1MGQxOWU5Mjg1MjJmOWI4OCIsIm5iZiI6MTY1MjM5MDM3NC45NDEsInN1YiI6IjYyN2Q3OWU2MGQxMWYyMDA1MWFiMjJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZPIq_enFXUgegsBrEMtPxfrP-tWjlwu3VWogkGaKIg`,
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_URL = `https://api.themoviedb.org/3/`;

  private async fetchData<T>(endpoint: string): Promise<T> {
    const response$ = this.http.get<T>(`${this.API_URL}${endpoint}`, options);
    const response = await response$;
    return firstValueFrom(response);
  }

  private http = inject(HttpClient);

  async fetchMovies(): Promise<any> {
    return this.fetchData(`discover/movie`);
  }

  async getTvShows(): Promise<any> {
    return this.fetchData('discover/tv');
  }

  async getRatedMovies(): Promise<any> {
    return this.fetchData(`guest_session/guest_session_id/rated/movies`);
  }

  async getBannerImage(id: number): Promise<any> {
    return this.fetchData(`movie/${id}/images`);
  }

  async getBannerVideo(id: number): Promise<any> {
    return this.fetchData(`movie/${id}/videos`);
  }

  async getBannerDetail(id: number): Promise<any> {
    return this.fetchData(`movie/${id}`);
  }

  async getNowPlayingMovies(): Promise<any> {
    return this.fetchData('movie/now_playing');
  }

  async getPopularMovies(): Promise<any> {
    return this.fetchData('movie/popular');
  }

  async getTopRated(): Promise<any> {
    return this.fetchData('movie/top_rated');
  }

  async getUpcomingMovies(): Promise<any> {
    return this.fetchData('movie/upcoming');
  }
}
