import * as chatListActions from './chatlist.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface User {
  name: string;
  email: string;
}
export interface Chat {
  user: string;
  lastMessage: string;
  numberOfMessages: number;
  lastModified: number;
  image: string;
}

export interface ChatListState extends EntityState<Chat> {
  addChatDialogState: boolean;
  activeChat: number | null;
  searchBoxState: boolean;
  users: User[];
}

export const adapter: EntityAdapter<Chat> = createEntityAdapter<Chat>({
  selectId: (chat: Chat) => chat.user,
  sortComparer: (chat1: Chat, chat2: Chat) =>
    chat1.user.localeCompare(chat2.user)
});

export const initialState = adapter.getInitialState({
  activeChat: null,
  searchBoxState: false,
  addChatDialogState: false,
  users: []
});

export const chatListReducer = createReducer(
  initialState,
  on(chatListActions.selectChat, (state, { selectedChat }) => ({
    ...state,
    activeChat: selectedChat
  })),
  on(chatListActions.chatListLoaded, (state, { chatList }) =>
    adapter.addMany(chatList, state)
  ),
  on(chatListActions.toggleSearchBox, (state) => ({
    ...state,
    searchBoxState: !state.searchBoxState
  })),
  on(chatListActions.toggleAddChat, (state) => ({
    ...state,
    addChatDialogState: !state.addChatDialogState
  })),
  on(chatListActions.loadUsers, (state, { users }) => ({
    ...state,
    users
  }))
);

export function reducer(state: ChatListState | undefined, action: Action) {
  return chatListReducer(state, action);
}

export const getActiveChat = (state: ChatListState) => state.activeChat;
export const getSearchBoxState = (state: ChatListState) => state.searchBoxState;
export const getAddChatDialogState = (state: ChatListState) =>
  state.addChatDialogState;
export const getAllUsers = (state: ChatListState) => state.users;

const { selectAll } = adapter.getSelectors();

export const getAllChats = selectAll;
