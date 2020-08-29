import { Component, Input, OnInit } from '@angular/core';

import { Chat } from 'src/app/state/ChatList/chatlist.reducer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() chat: Chat;
  @Input() isActive: number;
  @Input() isLast: boolean;
  readonly defaultImage =
    'https://cdn.icon-icons.com/icons2/1846/PNG/512/ninja_116231.png';

  constructor() {}

  ngOnInit(): void {}
}
