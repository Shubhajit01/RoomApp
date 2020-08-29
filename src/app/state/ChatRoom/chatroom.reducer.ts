import * as chatRoomActions from './chatroom.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { USER_CHAT } from 'src/assets/Mock';

export interface UserChat {
  message: string;
  isCurrentUser: boolean;
  time: string;
}

export interface UserChatState extends EntityState<UserChat> {}

export const adapter: EntityAdapter<UserChat> = createEntityAdapter<UserChat>();

export const initialState = adapter.getInitialState();

export const userChatReducer = createReducer(
  initialState,
  on(chatRoomActions.loadUserChat, (state, { userName }) =>
    adapter.addMany(USER_CHAT, state)
  )
);

export function reducer(state: UserChatState | undefined, action: Action) {
  return userChatReducer(state, action);
}

const { selectAll } = adapter.getSelectors();

export const getAllUserChatData = selectAll;
