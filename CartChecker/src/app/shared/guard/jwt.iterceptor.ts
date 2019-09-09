import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
       
        let currentUser = JSON.parse(localStorage.getItem('currentUser') );
        // console.log(currentUser)
        
        if (currentUser ) {
            request = request.clone({
                setHeaders: { 
                    Authorization: "Bearer " + currentUser
                }
            });
            
        }
        // const exp = /^(http:|https:)/;
        // if(!exp.exec(request.url)){

        // const url = "https://localhost:4200" 

     

        //     request = request.clone({
        //       url: url + request.url
        //     });
        // }
        return next.handle(request);
    }
}