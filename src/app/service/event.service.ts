import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public feedLinkEvent = new EventEmitter<string>();

  constructor() { }
}
