import { Chat, User } from './chatlist.reducer';
import { createAction, props } from '@ngrx/store';

export const selectChat = createAction(
  '[ChatList] Select Chat',
  props<{ selectedChat: number }>()
);

export const loadChatList = createAction('[ChatList] Load List');

export const chatListLoaded = createAction(
  '[ChatList] List Loaded',
  props<{ chatList: Chat[] }>()
);

export const loadUsers = createAction(
  '[ChatList] Load Users',
  props<{ users: User[] }>()
);

export const toggleSearchBox = createAction('[ChatList] Toggle SearchBox');

export const toggleAddChat = createAction('[ChatList] Toggle Add Chat Dialog');
