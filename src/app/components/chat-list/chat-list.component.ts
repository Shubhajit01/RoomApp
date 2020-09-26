import { Chat, ChatListState } from 'src/app/state/ChatList/chatlist.reducer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { RECENT_CHATS, USERS } from 'src/assets/Mock';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import {
  loadChatList,
  selectChat,
  toggleAddChat,
  toggleSearchBox
} from 'src/app/state/ChatList/chatlist.actions';
import {
  selectActiveChat,
  selectAddDialogState,
  selectBasedOnKeywords,
  selectChatList,
  selectSearchBoxState
} from 'src/app/state/ChatList/chatlist.selectors';

import { FormControl } from '@angular/forms';
import { expand } from '../../animations/curtain.animation';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  animations: [expand]
})
export class ChatListComponent implements OnInit {
  chatsList$: Observable<Chat[]>;
  activeChatIndex$: Observable<number | null>;
  showSearchBox$: Observable<boolean>;
  showAddChat$: Observable<boolean>;

  searchBoxSubscription: Subscription;
  searchBox: FormControl;

  constructor(private store: Store<ChatListState>) {
    this.chatsList$ = this.store.pipe(select(selectChatList));
    this.activeChatIndex$ = this.store.pipe(select(selectActiveChat));
    this.showSearchBox$ = this.store.pipe(select(selectSearchBoxState));
    this.showAddChat$ = this.store.pipe(select(selectAddDialogState));
  }

  ngOnInit() {
    this.store.dispatch(loadChatList());
    this.searchBox = new FormControl('');
    this.searchBox.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(console.log),
        tap(
          (keyword: string) =>
            (this.chatsList$ = this.store.pipe(
              select(selectBasedOnKeywords(keyword))
            ))
        )
      )
      .subscribe();
  }

  selectChat(index: number) {
    this.store.dispatch(selectChat({ selectedChat: index }));
  }

  toggleSearchBox() {
    this.store.dispatch(toggleSearchBox());
    this.searchBoxSubscription?.unsubscribe();
    this.chatsList$ = this.store.pipe(select(selectChatList));
  }

  toggleAddChatDialog() {
    this.store.dispatch(toggleAddChat());
  }
}
