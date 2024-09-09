import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private readonly genresList: any = [
    { id: 1, description: 'Rock' },
    { id: 2, description: 'Pop' },
  ];

  getGenres(): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.genresList);
        observer.complete();
      }, 3000);
    });
  }
}
