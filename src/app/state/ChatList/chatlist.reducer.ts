import * as chatListActions from './chatlist.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface Chat {
  user: string;
  lastMessage: string;
  numberOfMessages: number;
  lastModified: number;
  image: string;
}

export interface ChatListState extends EntityState<Chat> {
  activeChat: number | null;
}

export const adapter: EntityAdapter<Chat> = createEntityAdapter<Chat>({
  selectId: (chat: Chat) => chat.user,
  sortComparer: (chat1: Chat, chat2: Chat) =>
    chat1.user.localeCompare(chat2.user)
});

export const initialState = adapter.getInitialState({
  activeChat: null
});

export const chatListReducer = createReducer(
  initialState,
  on(chatListActions.selectChat, (state, { selectedChat }) => ({
    ...state,
    activeChat: selectedChat
  })),
  on(chatListActions.loadChatList, (state, { chatList }) =>
    adapter.addMany(chatList, state)
  ),
);

export function reducer(state: ChatListState | undefined, action: Action) {
  return chatListReducer(state, action);
}

export const selectActiveChat = (state: ChatListState) => state.activeChat;

const { selectAll } = adapter.getSelectors();

export const selectAllChats = selectAll;
