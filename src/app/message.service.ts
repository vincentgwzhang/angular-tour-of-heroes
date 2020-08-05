import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  addMessage(_message: string) {
    this.messages.push(_message);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }
}
