import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  // @ts-ignore
  public log(...params: Array<any>): void {
    console.log(new Date(), params);
  }
}
