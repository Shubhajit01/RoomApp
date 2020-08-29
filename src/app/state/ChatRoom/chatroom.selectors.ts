import * as fromChatRoom from './chatroom.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const chartRoomSelector = createFeatureSelector<
  fromChatRoom.UserChatState
>('chatRoom');

export const selectChatUserData = createSelector(
  chartRoomSelector,
  fromChatRoom.getAllUserChatData
);
