import {
  Chat,
  ChatListState,
  selectAllChats
} from 'src/app/state/ChatList/chatlist.reducer';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap
} from 'rxjs/operators';
import {
  getActiveChat,
  getChatList,
  selectBasedOnKeywords
} from 'src/app/state/index';
import {
  loadChatList,
  selectChat
} from 'src/app/state/ChatList/chatlist.actions';

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
  readonly defaultImage =
    'https://cdn.icon-icons.com/icons2/1846/PNG/512/ninja_116231.png';
  showSearchBox = false;
  searchBoxSubscription: Subscription;

  @ViewChild('searchBox', { static: false }) searchBox: ElementRef;

  constructor(private store: Store<ChatListState>) {
    this.chatsList$ = this.store.pipe(select(getChatList));
    this.activeChatIndex$ = this.store.pipe(select(getActiveChat));
  }

  ngOnInit() {
    this.store.dispatch(
      loadChatList({
        chatList: [
          {
            user: 'Zelma Dickerson',
            lastMessage:
              'Lorem tempor sit incididunt amet reprehenderit commodo.',
            lastModified: 870431,
            numberOfMessages: 819,
            image: 'https://randomuser.me/api/portraits/med/women/49.jpg'
          },
          {
            user: 'Dennis Dejesus',
            lastMessage: 'Duis excepteur deserunt reprehenderit id sunt sint.',
            lastModified: 902446,
            numberOfMessages: 623,
            image: 'https://randomuser.me/api/portraits/med/women/22.jpg'
          },
          {
            user: 'Langley Russo',
            lastMessage:
              'Minim non ea laborum cillum pariatur laboris amet quis ea ex fugiat quis laboris ullamco.',
            lastModified: 642863,
            numberOfMessages: 854,
            image: 'https://randomuser.me/api/portraits/med/women/91.jpg'
          },
          {
            user: 'Beard Mcknight',
            lastMessage:
              'Enim cupidatat cillum ipsum irure Lorem ut laborum eiusmod aliquip dolore ea laborum deserunt ut.',
            lastModified: 833713,
            numberOfMessages: 149,
            image: 'https://randomuser.me/api/portraits/med/men/71.jpg'
          },
          {
            user: 'Paulette Kidd',
            lastMessage:
              'Duis fugiat sunt ut non amet dolor amet minim consectetur nulla.',
            lastModified: 146385,
            numberOfMessages: 313,
            image: 'https://randomuser.me/api/portraits/med/women/59.jpg'
          },
          {
            user: 'Kate Baldwin',
            lastMessage: 'Officia minim id deserunt aliquip.',
            lastModified: 573687,
            numberOfMessages: 527,
            image: 'https://randomuser.me/api/portraits/med/men/99.jpg'
          },
          {
            user: 'Hammond Wagner',
            lastMessage:
              'Aute do minim dolore qui eu labore ad mollit Lorem laboris non.',
            lastModified: 257699,
            numberOfMessages: 921,
            image: 'https://randomuser.me/api/portraits/med/men/90.jpg'
          },
          {
            user: 'Patton Benjamin',
            lastMessage:
              'Irure laborum aliquip ut consequat aliqua dolor est eu.',
            lastModified: 601301,
            numberOfMessages: 191,
            image: 'https://randomuser.me/api/portraits/med/men/12.jpg'
          },
          {
            user: 'Baxter Donovan',
            lastMessage:
              'Laboris adipisicing aute ipsum minim in adipisicing veniam proident consequat.',
            lastModified: 732670,
            numberOfMessages: 820,
            image: 'https://randomuser.me/api/portraits/med/men/9.jpg'
          },
          {
            user: 'Dunlap Phillips',
            lastMessage:
              'Culpa pariatur velit dolore sit nostrud ea sunt sit culpa mollit.',
            lastModified: 807566,
            numberOfMessages: 730,
            image: 'https://randomuser.me/api/portraits/med/women/62.jpg'
          },
          {
            user: 'Roberson Terrell',
            lastMessage:
              'Cupidatat ullamco sunt nisi esse sunt anim exercitation duis dolor.',
            lastModified: 920412,
            numberOfMessages: 748,
            image: 'https://randomuser.me/api/portraits/med/women/36.jpg'
          },
          {
            user: 'Tanya Roberson',
            lastMessage:
              'Consectetur sunt sunt pariatur ipsum aliqua cupidatat amet et ea.',
            lastModified: 374384,
            numberOfMessages: 224,
            image: 'https://randomuser.me/api/portraits/med/men/27.jpg'
          },
          {
            user: 'Jewell Hutchinson',
            lastMessage:
              'Incididunt voluptate ut tempor elit ea officia aliqua et fugiat consectetur dolore adipisicing commodo excepteur.',
            lastModified: 495655,
            numberOfMessages: 699,
            image: 'https://randomuser.me/api/portraits/med/women/49.jpg'
          },
          {
            user: 'Sharron Carpenter',
            lastMessage:
              'Velit adipisicing fugiat consequat ullamco laboris non excepteur.',
            lastModified: 561939,
            numberOfMessages: 468,
            image: 'https://randomuser.me/api/portraits/med/men/91.jpg'
          },
          {
            user: 'Wright Mcdowell',
            lastMessage:
              'Enim reprehenderit dolore esse anim aliqua ex tempor eu ipsum voluptate.',
            lastModified: 443895,
            numberOfMessages: 381,
            image: 'https://randomuser.me/api/portraits/med/men/51.jpg'
          },
          {
            user: 'Angela Harding',
            lastMessage:
              'Occaecat laborum anim et nisi cillum labore eu ipsum ex culpa commodo in aliquip.',
            lastModified: 475561,
            numberOfMessages: 743,
            image: 'https://randomuser.me/api/portraits/med/men/66.jpg'
          },
          {
            user: 'Hunter Mays',
            lastMessage: 'Ex aliqua deserunt aliqua laborum eiusmod.',
            lastModified: 978325,
            numberOfMessages: 323,
            image: 'https://randomuser.me/api/portraits/med/women/54.jpg'
          },
          {
            user: 'Nellie Cruz',
            lastMessage:
              'Velit Lorem proident nostrud occaecat ullamco ipsum deserunt elit qui anim dolor.',
            lastModified: 222932,
            numberOfMessages: 207,
            image: 'https://randomuser.me/api/portraits/med/women/66.jpg'
          },
          {
            user: 'Sears Ingram',
            lastMessage: 'Ipsum do non quis nisi fugiat irure aute.',
            lastModified: 270597,
            numberOfMessages: 164,
            image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
          },
          {
            user: 'Francisca Sweet',
            lastMessage:
              'Qui laborum et excepteur sit tempor adipisicing Lorem non officia mollit eiusmod ipsum dolore.',
            lastModified: 619105,
            numberOfMessages: 94,
            image: 'https://randomuser.me/api/portraits/med/men/68.jpg'
          }
        ]
      })
    );
  }

  selectChat(index: number) {
    this.store.dispatch(selectChat({ selectedChat: index }));
  }

  toggleSearchBox() {
    this.showSearchBox = !this.showSearchBox;
    console.log(this.showSearchBox);

    if (this.searchBoxSubscription) {
      this.searchBoxSubscription.unsubscribe();
    }
    setTimeout(() => {
      if (this.searchBox?.nativeElement) {
        this.searchBoxSubscription = fromEvent(
          this.searchBox.nativeElement,
          'keyup'
        )
          .pipe(
            map((event: any) => event.target.value),
            debounceTime(200),
            distinctUntilChanged(),
            tap(
              (keyword) =>
                (this.chatsList$ = this.store.pipe(
                  select(selectBasedOnKeywords(keyword))
                ))
            )
          )
          .subscribe();
      } else {
        this.chatsList$ = this.store.pipe(select(selectAllChats));
      }
    }, 350);
  }
}
