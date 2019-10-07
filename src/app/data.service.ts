import { Injectable } from '@angular/core';
import { timer, throwError, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getError(): Observable<any> {
    return timer(3500).pipe(
      map(_ => {
        console.log('3.5 seconds have elapsed.');
        throw { text: 'This is a fake error' };
      }));
  }
}
