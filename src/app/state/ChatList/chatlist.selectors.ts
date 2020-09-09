import * as fromChatList from './chatlist.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * ChatsList Selectors
 */
export const chatListSelector = createFeatureSelector<
  fromChatList.ChatListState
>('chatsList');

export const selectChatList = createSelector(
  chatListSelector,
  fromChatList.getAllChats
);

export const selectActiveChat = createSelector(
  chatListSelector,
  fromChatList.getActiveChat
);

export const selectSearchBoxState = createSelector(
  chatListSelector,
  fromChatList.getSearchBoxState
);

export const selectAddDialogState = createSelector(
  chatListSelector,
  fromChatList.getAddChatDialogState
);

export const selectBasedOnKeywords = (keyword) => {
  return createSelector(selectChatList, (chats) =>
    chats.filter((chat) =>
      chat.user.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    )
  );
};

export const selectAllUsers = createSelector(
  chatListSelector,
  fromChatList.getAllUsers
);

export const selectUserOnKeyword = (keyword) => {
  return createSelector(selectAllUsers, (users) =>
    users.filter((user) =>
      user.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    )
  );
};

export const selectActiveUser = createSelector(
  selectChatList,
  selectActiveChat,
  (chatList, activeChatIndex) => chatList[activeChatIndex]
);
