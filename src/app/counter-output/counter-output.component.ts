import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent  {
  //counter = 0;
  //counterServiceSub?: Subscription;
  count$:Observable<number>;
  doubleCount$: Observable<number>;

  constructor(private store:Store<{counter:number}>
    //private counterService: CounterService
    ) {
       //this.count$ = store.select('counter');
       this.count$ = store.select(selectCount);//ch 382
       this.doubleCount$ = store.select(selectDoubleCount);

    }

  // ngOnInit(): void {//commenting bcoz of using reducer to fetch from strore
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
