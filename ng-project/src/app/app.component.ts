import { Component, ViewContainerRef } from '@angular/core';
import { ChatService } from './services/chat.service';
import { ToastrModule } from 'ngx-toastr';
import { BoardService } from './board.service'
import { Board } from './board'
// set game constants
declare const Pusher: any;
const NUM_PLAYERS = 2;
const BOARD_SIZE = 6;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoardService]
})
export class AppComponent {

      constructor(public chatService: ChatService) {
      }
    }
