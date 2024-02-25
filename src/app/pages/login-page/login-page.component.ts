import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../states/app.state';
import { selectCount } from '../../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../../states/counter/counter.actions';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  count$: Observable<number>

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }

}
