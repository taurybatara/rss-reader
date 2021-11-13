import { RSSEntry } from "./rss-entry";

export interface RSSFeed {
  feedUrl?: string;
  title?: string;
  description?: string;
  link?: string;
  entries?: RSSEntry[];
}