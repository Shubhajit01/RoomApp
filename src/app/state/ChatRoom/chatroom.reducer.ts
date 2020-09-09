import * as chatRoomActions from './chatroom.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { USER_CHAT } from 'src/assets/Mock';

export interface UserChat {
  message: string;
  isCurrentUser: boolean;
  time: string;
  id: string;
}

export interface UserChatState extends EntityState<UserChat> {
  showLoader: boolean;
}

export const adapter: EntityAdapter<UserChat> = createEntityAdapter<UserChat>();

export const initialState = adapter.getInitialState({
  showLoader: false
});

export const userChatReducer = createReducer(
  initialState,
  on(chatRoomActions.userChatLoaded, (state, { messages }) =>
    adapter.addMany(messages, state)
  ),
  on(chatRoomActions.toggleLoader, (state, action) => ({
    ...state,
    showLoader: action.show
  }))
);

export function reducer(state: UserChatState | undefined, action: Action) {
  return userChatReducer(state, action);
}

const { selectAll } = adapter.getSelectors();

export const getAllUserChatData = selectAll;

export const getLoaderState = (state: UserChatState) => state.showLoader;
