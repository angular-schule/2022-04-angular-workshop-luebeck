import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observer
    const observer = {
      next: (x: string) => this.log(x),
      error: (err: any) => this.log('ERROR ' + err),
      complete: () => this.log('COMPLETE')
    }

    // 2. Observable
    // 3. Subscriber
    // (ABC)|
    // const observable = of('🤪', '😎', '🤩');
    const observable = new Observable<string>(subscriber => {

      subscriber.next('🤪');
      // subscriber.error('UPSI');
      // subscriber.next('Ätsch bätsch!')

      const x = setTimeout(() => {subscriber.next('😎'); this.log('🧟‍♀️ Zombie Code! 🧟‍♂️') }, 2000);

      // obs.complete();
      return () => {
        this.log('Es wurde unsubscribed! Schnell aufräumen!');
        clearTimeout(x);
      }
    });

    // 4. Subscription
    const subscription = observable.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1000);

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
