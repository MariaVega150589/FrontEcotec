import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  tokenKey: string = "token";
  urlBase: string = "https://localhost:5001/api";

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  login(user: string, pass: string) {
    let body: login = {
      userName: user,
      password: pass,
      notificationToken: '',
      plattaform: '',
      so: ''
    };
    let url = this.urlBase + '/security/Account/LoginWeb';
    return this.http.post(url, body).subscribe({
      next: (res: any) => {
        localStorage.setItem(this.tokenKey, res.jwt)
        this.isAuthSubject.next(true);
        this.router.navigate(['projects']);
      },
      error: e => {
        console.log(e);
      }
    })
  }

  checkToken() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.isAuthSubject.next(true);
    }
  }

  logOut() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthSubject.next(false);
  }

}

export interface login {
  userName: string,
  password: string,
  notificationToken: string,
  plattaform: string,
  so: string
}

export interface isLogged {
  isAuthenticated: boolean,
  jwt: string,
  refreshToken: string,
  expDate: string,
  user: User
}

export interface User {
  userId: string,
  email: string,
  nombre: string,
  role: string,
  permisos: [],
  createDate: string
}
