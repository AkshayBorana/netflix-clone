import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const options = {
  options: {
  include_adult: true,
  include_video: true,
  page: 1,
  language: 'en-US',
  sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'applications/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDNhMGRhYzc1NjE5Mzc1MGQxOWU5Mjg1MjJmOWI4OCIsIm5iZiI6MTY1MjM5MDM3NC45NDEsInN1YiI6IjYyN2Q3OWU2MGQxMWYyMDA1MWFiMjJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZPIq_enFXUgegsBrEMtPxfrP-tWjlwu3VWogkGaKIg`
  }
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private readonly API_URL = `https://api.themoviedb.org/3/discover/movie`;

  private http = inject(HttpClient);

  async fetchMovies(): Promise<any> {
    const movies$ =  this.http.get<any>(`${this.API_URL}`, options);
    const response = await movies$
    return firstValueFrom(response)
  }

}
