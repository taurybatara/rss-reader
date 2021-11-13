import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RSSParserService {
    bypassCors: string = "https://cors-anywhere.herokuapp.com/";

    public constructor(private httpClient: HttpClient) {

    }

    public getRSSFeed(feedLink: string): Observable<any> {
        console.log(feedLink);
        const requestOptions: Object = { observe: 'body', responseType: 'text'};

        return this.httpClient.get<any>(this.bypassCors + feedLink, requestOptions);
    }
}