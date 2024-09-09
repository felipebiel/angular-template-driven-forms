import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderListResponse } from '../types/users-placeholder-list-respose';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly _httpClient: HttpClient) {}

  getusersPlaceholder(): Observable<UsersPlaceholderListResponse> {
    return this._httpClient.get<UsersPlaceholderListResponse>(this.url);
  }
}
