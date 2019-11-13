import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user'
import { USER } from './mock-user';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isSuccess } from 'angular-in-memory-web-api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  // getUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.userUrl)
  //     .pipe(
  //       tap(_ => console.log(User))
  //     )

  // }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
  }

  saveUser(user: User): Observable<User> {
      console.log(user);
      return this.http.post<User>(this.userUrl, user, httpOptions).pipe(
      // tap((teste: User) => this.log(`added ${teste.bairro}`)),
      // catchError(this.handleError<any>('updateUser'))
    );
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }

  private userUrl = 'api/user';  // URL to web api

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getUser(cepNumber:string): Observable<User> {
  //   return this.http.get<User>(`https://viacep.com.br/ws/${cepNumber}/json/`)
  //     .pipe(
  //       tap(_ => console.log('deu certo'))
  //     )
  // }


}
