import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PusherService } from './services/pusher.service';
import { ChatService } from './services/chat.service';
import { MyDetailsComponent } from './my-details/my-details.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    ChatComponent
  ],
  imports: [
    ToastModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChatService, PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
