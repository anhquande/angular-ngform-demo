import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  // @ts-ignore
  public log(...params: Array<any>): void {
    const date = new Date();
    const mm: string = date.getMinutes().toString().padStart(2, '0');
    const ss = date.getSeconds().toString().padStart(2, '0');
    const now: string = `[${mm}:${ss}]`;

    console.log(now, ...params);
  }
}
