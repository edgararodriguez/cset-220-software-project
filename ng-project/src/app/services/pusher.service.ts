import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
private _pusher: any;
///Insert pusher key below
constructor() {
  this._pusher = new Pusher('5284221aac761fc73fc7', {
    cluster: 'us2',
    encrypted: true
  });
}

getPusher() {
  return this._pusher;
}

}
