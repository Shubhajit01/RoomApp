import { Actions, Effect, ofType } from '@ngrx/effects';
import { loadUserChat, userChatLoaded } from './chatroom.actions';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketioService } from 'src/app/services/socketio/socketio.service';

@Injectable({ providedIn: 'root' })
export class ChatRoomEffects {
  @Effect()
  load$: Observable<Action> = this.actions.pipe(
    ofType(loadUserChat),
    switchMap((action) => {
      this.socket.loadUserChatHistory(action);
      return this.socket.chatDat$.pipe(
        map((data) => userChatLoaded({ messages: data }))
      );
    })
  );

  constructor(private actions: Actions, private socket: SocketioService) {}
}
