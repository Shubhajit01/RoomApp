import { createAction, props } from '@ngrx/store';

import { Chat } from '../ChatList/chatlist.reducer';
import { UserChat } from './chatroom.reducer';

export const loadUserChat = createAction(
  '[ChatRoom] Load User Chat',
  props<{ userName: string }>()
);

export const userChatLoaded = createAction(
  '[ChatRoom] User Chat Loaded',
  props<{ messages: UserChat[] }>()
);

export const UpdateMessageList = createAction(
  '[ChatRoom] Update Message List',
  props<{ messages: UserChat[] }>()
);

export const toggleLoader = createAction(
  '[ChatRoom] Toggle Loader',
  props<{ show: boolean }>()
);


