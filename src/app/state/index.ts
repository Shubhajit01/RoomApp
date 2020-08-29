import * as fromChatList from './ChatList/chatlist.reducer';
import * as fromChatRoom from './ChatRoom/chatroom.reducer';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AppState {
  chatsList: fromChatList.ChatListState;
  chatRoom: fromChatRoom.UserChatState;
}

export const reducers: ActionReducerMap<AppState> = {
  chatsList: fromChatList.reducer,
  chatRoom: fromChatRoom.reducer
};

