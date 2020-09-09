import { Action, Store } from '@ngrx/store';
import {
  UpdateMessageList,
  userChatLoaded
} from 'src/app/state/ChatRoom/chatroom.actions';

import { AppState } from 'src/app/state';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  constructor(private socket: Socket, private store: Store<AppState>) {
    this.socket.on('updateMessageList', (data) =>
      this.store.dispatch(UpdateMessageList(data))
    );
  }

  loadUserChatHistory(action) {
    console.log('Here')
    this.socket.emit('chatRoom', {
      type: 'LOAD_HISTORY',
      userName: action.userName
    });
  }
}
