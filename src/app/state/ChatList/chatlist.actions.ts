import { createAction, props } from '@ngrx/store';

import { Chat } from './chatlist.reducer';

export const selectChat = createAction(
  '[ChatList] Select Chat',
  props<{ selectedChat: number }>()
);

export const loadChatList = createAction(
  '[ChatList] Load List',
  props<{ chatList: Chat[] }>()
);
