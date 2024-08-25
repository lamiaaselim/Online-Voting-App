import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  //   if (token) {
  //     const cloned = req.clone({
  //       headers: req.headers.set('Authorization', `Bearer ${token}`)
  //     });

  //     return next.handle(cloned);
  //   } else {
  //     return next.handle(req);
  //   }
  // }
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.authService.getToken();

    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle errors globally
        if (error.status === 401) {
          console.error('Unauthorized access - logging out');
          this.authService.logout();
        } else if (error.status === 403) {
          console.error('Access forbidden');
        }
        // Use throwError with a factory function
        return throwError(() => new Error(error.message));
      })
    );
  }
}
