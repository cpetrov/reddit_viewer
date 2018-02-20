import { Page, Properties } from 'tabris';
import { RedditPost } from './RedditService';
import { component } from 'tabris-decorators';

const STRECH = {left: 0, top: 0, right: 0, bottom: 0};

interface ItemProperty {item: RedditPost; }

@component export default class RedditPostPage extends Page {

  public jsxProperties: JSX.PageProperties & ItemProperty;

  public readonly item: RedditPost;

  constructor(properties: Properties<RedditPostPage> & ItemProperty) {
    let {item, ...settable} = properties;
    super({background: 'black', ...settable});
    this.item = item;
    this.append(
        item.data.url.endsWith('.jpg')
      ? <imageView {...STRECH} image={item.data.url} />
      : <webView {...STRECH} url={item.data.url} />
    );
  }

}
