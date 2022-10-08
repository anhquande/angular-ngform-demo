import { Component, VERSION } from '@angular/core';
import { ApiService } from './api-service';
import { take, tap, delay, map, Subject, debounce, interval } from 'rxjs';
import { LoggingService } from './LoggingService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public click: Subject<string> = new Subject<string>();

  public constructor(
    public readonly logger: LoggingService,
    public readonly apiService: ApiService
  ) {
    this.click.pipe(
      tap(() => {
        this.apiService
          .getHello(this.name)
          .pipe(
            take(1),
            tap((response) => {
              this.logger.log('AppComponent taps the Response:: ', response);
            }),
            map((r) => r.toUpperCase()),
            delay(2000)
          )
          .subscribe((r) => {
            this.logger.log('AppComponent observer process the result r: ', r);
          });
      }),
      debounce((i) => interval(200))
    );
  }

  public sayHello(): void {
    this.logger.log('AppComponent.sayHello() is called');
    this.click.next('');
  }
}
