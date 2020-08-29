import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  UserChat,
  UserChatState
} from 'src/app/state/ChatRoom/chatroom.reducer';

import { Observable } from 'rxjs';
import { loadUserChat } from 'src/app/state/ChatRoom/chatroom.actions';
import { selectChatUserData } from 'src/app/state/ChatRoom/chatroom.selectors';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  chatData$: Observable<UserChat[]>;

  constructor(private store: Store<UserChatState>) {
    this.chatData$ = this.store.pipe(select(selectChatUserData));
  }

  ngOnInit() {
    this.store.dispatch(loadUserChat({ userName: 'ABC' }));
  }
}
