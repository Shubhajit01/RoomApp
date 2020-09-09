import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  UserChat,
  UserChatState
} from 'src/app/state/ChatRoom/chatroom.reducer';
import {
  loadUserChat,
  toggleLoader
} from 'src/app/state/ChatRoom/chatroom.actions';
import {
  selectChatUserData,
  selectLoaderState
} from 'src/app/state/ChatRoom/chatroom.selectors';

import { AppState } from 'src/app/state';
import { Chat } from 'src/app/state/ChatList/chatlist.reducer';
import { SocketioService } from 'src/app/services/socketio/socketio.service';
import { selectActiveUser } from 'src/app/state/ChatList/chatlist.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  chatData$: Observable<UserChat[]>;
  showLoader$ = of(false);
  messageInput: FormControl;
  activeUser$: Observable<Chat>;
  io: any;

  @ViewChild('container', { static: false }) set container(
    element: ElementRef
  ) {
    if (element?.nativeElement) {
      element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
    }
  }

  constructor(private store: Store<AppState>) {
    this.activeUser$ = this.store.pipe(select(selectActiveUser));
    this.chatData$ = this.store.pipe(select(selectChatUserData));
    // this.showLoader$ = this.store.pipe(select(selectLoaderState));
  }

  ngOnInit() {
    this.messageInput = new FormControl('', [Validators.required]);
    // this.store.dispatch(toggleLoader({ show: true }));
    this.store.dispatch(loadUserChat({userName: 'abc'}));
  }

  sendMessage(event: KeyboardEvent) {
    event.preventDefault();
    if (this.messageInput.invalid) {
      return;
    }
    console.log(this.messageInput.value);
    this.messageInput.reset();
  }
}
