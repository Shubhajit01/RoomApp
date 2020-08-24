import * as fromChatList from './ChatList/chatlist.reducer';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AppState {
  chatsList: fromChatList.ChatListState;
}

export const reducers: ActionReducerMap<AppState> = {
  chatsList: fromChatList.reducer
};

/**
 * ChatsList Selectors
 */
export const chatListSelector = createFeatureSelector<
  fromChatList.ChatListState
>('chatsList');

export const getChatList = createSelector(
  chatListSelector,
  fromChatList.selectAllChats
);

export const getActiveChat = createSelector(
  chatListSelector,
  fromChatList.selectActiveChat
);

export const selectBasedOnKeywords = (keyword) => {
  return createSelector(getChatList, (chats) =>
    chats.filter((chat) => chat.user.includes(keyword))
  );
};
