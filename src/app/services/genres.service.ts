import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresListResponse } from '../types/genres-list-response';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private readonly genresList: GenresListResponse = [
    { id: 1, description: 'Rock' },
    { id: 2, description: 'Pop' },
  ];

  getGenres(): Observable<GenresListResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.genresList);
        observer.complete();
      }, 3000);
    });
  }

  getGenreDescription(genreId: number): string {
    const genreDescription = this.genresList.find(genre => genre.id === genreId)?.description;

    return genreDescription ? genreDescription : '';
  }
}
