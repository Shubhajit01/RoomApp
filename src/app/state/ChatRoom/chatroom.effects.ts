import { Actions, Effect, ofType } from '@ngrx/effects';
import { loadUserChat, userChatLoaded } from './chatroom.actions';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketioService } from 'src/app/services/socketio/socketio.service';
import { UserChat } from './chatroom.reducer';
import { USER_CHAT } from 'dist/Room/assets/Mock';

@Injectable({ providedIn: 'root' })
export class ChatRoomEffects {
  @Effect()
  load$: Observable<Action> = this.actions.pipe(
    ofType(loadUserChat),
    map(() => userChatLoaded({ messages: USER_CHAT }))
    // switchMap((action) =>
    //   this.http
    //     .post('http://localhost:3000/chat-history', {
    //       userName: action.userName
    //     })
    //     .pipe(map((chats: UserChat[]) => userChatLoaded({ messages: chats })))
    // )
  );

  constructor(private actions: Actions, private http: HttpClient) {}
}
