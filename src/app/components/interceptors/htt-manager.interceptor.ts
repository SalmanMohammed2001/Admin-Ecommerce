import {HttpErrorResponse, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {catchError, tap, throwError} from "rxjs";
import {inject} from "@angular/core";
import {CookieManagerServiceService} from "../services/cookie-manager-service.service";
import {LoadingStatusServiceService} from "../services/loading-status-service.service";

export const httManagerInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieManagerService = inject(CookieManagerServiceService);

  let loadingStatusService = inject(LoadingStatusServiceService);

  loadingStatusService.loadingState.next(true);


  if (cookieManagerService.isTokenExists()) {
    const token = cookieManagerService.getToken();
    console.log( cookieManagerService.getToken());
    /*  req = req.clone({
        headers: req.headers.set('Authorization', token),
      });*/
    req=req.clone({
      setHeaders:{Authorization:cookieManagerService.getToken()}
    })
  }


  return next(req).pipe(
    tap(event=>{
      if(event instanceof  HttpResponse && event.status>=200){
        loadingStatusService.loadingState.next(false)
      }
    }),
    catchError((error:HttpErrorResponse)=>{
      loadingStatusService.loadingState.next(false)
      console.log(error)
      // error manage

      return throwError(()=>error.error)
    }),
  )



};
