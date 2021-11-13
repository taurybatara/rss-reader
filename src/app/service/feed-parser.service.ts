import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RSSParserService {
    public constructor(private httpClient: HttpClient) {

    }

    public getRSSFeed(feedLink: string): Observable<any> {
        console.log(feedLink);
        const requestOptions: Object = { observe: 'body', responseType: 'text'};

        return this.httpClient.get<any>(feedLink, requestOptions);
    }
}