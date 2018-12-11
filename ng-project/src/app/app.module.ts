import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PusherService } from './services/pusher.service';
import { ChatService } from './services/chat.service';
import { MyDetailsComponent } from './my-details/my-details.component';
import { ChatComponent } from './chat/chat.component';
import { ToastrModule } from 'ngx-toastr';
import { routing }        from './app.routing';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { BattleshipComponent } from './battleship';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';


@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    ChatComponent,
    AlertComponent,
    BattleshipComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ChatService, PusherService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
