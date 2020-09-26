import { Action, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
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
  private chatData: Subject<any> = new Subject<any>();
  chatDat$ = this.chatData.asObservable();

  private userList: Subject<any> = new Subject<any>();
  userList$ = this.userList.asObservable();

  constructor(private socket: Socket, private store: Store<AppState>) {
    this.socket.on('userCharHistoryData', (data) => this.chatData.next(data));
    this.socket.on('usersList', (data) => this.userList.next(data));
  }

  loadUserChatHistory(action) {
    this.socket.emit('chatRoom', {
      type: 'LOAD_HISTORY',
      userName: action.userName
    });
  }

  getUserList() {
    this.socket.emit('chatRoom', {
      type: 'USER_LIST'
    });
  }
}
