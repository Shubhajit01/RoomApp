import { createAction, props } from '@ngrx/store';

export const loadUserChat = createAction(
  '[ChatRoom] Load User Chat',
  props<{ userName: string }>()
);
