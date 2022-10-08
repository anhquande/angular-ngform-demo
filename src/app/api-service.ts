import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { LoggingService } from './LoggingService';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor(public readonly logger: LoggingService) {}

  public getHello(name: string): Observable<string> {
    this.logger.log('', 'ApiService.getHello is called with param: ', name);
    return of(`hello ${name}`).pipe(
      delay(5000),
      tap((r) => {
        this.logger.log('ApiService.getHello(). returns ', r);
      })
    );
  }
}
