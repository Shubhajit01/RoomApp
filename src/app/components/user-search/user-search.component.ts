import { ChatListState, User } from 'src/app/state/ChatList/chatlist.reducer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import {
  loadUsers,
  toggleAddChat
} from 'src/app/state/ChatList/chatlist.actions';
import {
  selectAllUsers,
  selectUserOnKeyword
} from 'src/app/state/ChatList/chatlist.selectors';

import { FormControl } from '@angular/forms';
import { USERS } from 'src/assets/Mock';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userSearch: FormControl;
  userSearchSubscription: Subscription;
  users$: Observable<User[]>;

  constructor(private store: Store<any>) {
    this.users$ = this.store.pipe(select(selectAllUsers));
  }

  ngOnInit(): void {
    this.store.dispatch(
      loadUsers({
        users: USERS
      })
    );
    this.userSearch = new FormControl('');
    this.userSearch.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(
          (value: string) =>
            (this.users$ = this.store.pipe(select(selectUserOnKeyword(value))))
        )
      )
      .subscribe();
  }

  toggleAddChatDialog() {
    this.store.dispatch(toggleAddChat());
  }
}
