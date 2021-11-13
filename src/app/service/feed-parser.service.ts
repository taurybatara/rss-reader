import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
@Injectable()
export class RSSParserService { 
    public constructor(private httpClient: HttpClient) {

    }    

    public getRSSFeed(feedLink: string): Observable<any> {
        console.log(feedLink);

        return  from(fetch(feedLink, {
                //headers: { 'Content-Type': 'application/xml'},
                method: 'GET',
                mode: 'no-cors',
                respo
        }));
    }
}