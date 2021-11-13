import { Component, OnInit } from "@angular/core";
import { EventService } from "../service/event.service";
import { RSSParserService } from "../service/feed-parser.service";
import * as xml2js from "xml2js";
import { RSSFeed } from "../models/rss-feed";
import { RSSEntry } from "../models/rss-entry";
import { Router } from "@angular/router";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.less']
})

export class FeedComponent implements OnInit {
    feedLink: string = "";
    feedResponse: any;
    rssFeed: RSSFeed;
    rssEntries: RSSEntry[] = [];

    constructor(
        private eventService: EventService, 
        private rssParserService: RSSParserService,
        private router: Router) {
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
            this.getFeedList(res);
        })
    }

    public routeTo(url: string) {
        window.location.href = url;
    }

    public getFeedList(xml: any) {
        const parser = new xml2js.Parser();
        parser.parseString(xml, (err:any,result:any) => {
            if(err) {
                alert(err);
            } else {
                var feed = result.rss.channel[0] as any;
                console.log(feed);

                this.rssFeed = {
                    title: feed.title[0],
                    description: feed.description[0],
                    link: feed.link[0]
                };

                this.rssEntries = feed.item.map((item: any) => {
                    const rssEntry: RSSEntry = {
                        categories: item.category,
                        title: item.title[0],
                        guid: item.guid[0],
                        link: item.link[0],
                        contentSnippet: item.description[0]
                    }
                    return rssEntry;
                });
                
                console.log(this.rssFeed);
            }
        })
    }
}