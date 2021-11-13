import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "../service/event.service";
import { RSSParserService } from "../service/feed-parser.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {
    feedLink: string = "";

    constructor(private eventService: EventService, private rssParserService: RSSParserService) { 
    }

    ngOnInit(): void {
        this.eventService.feedLinkEvent.subscribe(val => {
            // 5. We subscriben hier op event en pakken de value op
            this.feedLink = val;

            this.getContent(this.feedLink);
        });
    }

    public getContent(feedLink: string): void {
        this.rssParserService.getRSSFeed(feedLink).subscribe(res => {
            console.log(res);
        })
    }
}
