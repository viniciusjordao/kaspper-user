import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

    saveUser(user: User): Observable<User> {
      
    return this.http.put(this.userUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`added ${user.bairro}`)),
    );
  }

    getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(_ => console.log('deu certo'))
      )

  }

  private userUrl = 'api/user';  // URL to web api

  // getUser(cepNumber:string): Observable<User> {
  //   return this.http.get<User>(`https://viacep.com.br/ws/${cepNumber}/json/`)
  //     .pipe(
  //       tap(_ => console.log('deu certo'))
  //     )
  // }


}
