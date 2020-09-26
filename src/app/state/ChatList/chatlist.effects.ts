import { Actions, Effect, ofType } from '@ngrx/effects';
import { chatListLoaded, loadChatList } from './chatlist.actions';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketioService } from 'src/app/services/socketio/socketio.service';

@Injectable({ providedIn: 'root' })
export class ChatListEffects {
  @Effect()
  loadChatList$: Observable<Action> = this.actions.pipe(
    tap(console.log),
    ofType(loadChatList),
    switchMap(() => {
      this.socket.getUserList();
      return this.socket.userList$.pipe(
        map((data) => chatListLoaded({ chatList: data }))
      );
    })
  );

  constructor(private actions: Actions, private socket: SocketioService) {}
}
