import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { UsersListResponse } from '../types/users-list-reponse';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'http://localhost:3000/users';
  constructor(private readonly _httpClient: HttpClient) {}

  getUsers(): Observable<UsersListResponse> {
    return this._httpClient.get<UsersListResponse>(this.url).pipe(delay(3000));
  }

  updateUser(userId: number | string, userPayload: IUser): Observable<IUser> {
    return this._httpClient.put<IUser>(this.url + '/' + userId, userPayload);
  }
}
