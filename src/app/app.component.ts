import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
    // 1. We maken een formcontrol aan die gekoppeld zal zijn aan de <input> in html
    public feed: FormControl = new FormControl("");

    // TODO: herschrijf naar gebruiken van de formcontrol value als waarde om te bepalen of we de feed laten zien
    public showFeed: boolean = false;

    // 3. EventService wordt hier meegegeven doormiddel van het toevoegen van de service aan app.module
    public constructor(private eventService: EventService) {}

    public getContentFromLink() {
        console.log(this.feed.value);
        if (!this.feed.value) {
            // TODO: Refactor deze alert in een modal window, na het implementeren van Angular materials of andere css pack
            alert('Vul een RSS-link in');
            this.showFeed = false;
        } else {
            this.showFeed = true;
            // 4. We gebruiken hier de event emitter van de event service om de link door te kunnen geven aan feed component
            this.eventService.feedLinkEvent.emit(this.feed.value);
        }
    }
}
