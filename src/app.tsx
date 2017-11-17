import { ui } from 'tabris';
import SubredditPage from './SubredditPage';
import SubredditPresenter from './SubredditPresenter';
import RedditService from './RedditService';

const SUBREDDIT = 'petpictures';

ui.contentView.append(
  <navigationView left={0} top={0} right= {0} bottom={0}>
    <page title='cats'>
      <scrollView left={0} top={0} right= {0} bottom={0}>
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/1' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/2' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/3' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/4' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/5' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/6' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/7' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/8' />
        <imageView top='prev() 10' image='http://lorempixel.com/400/200/cats/9' />
      </scrollView>
    </page>
  </navigationView>
);

test();

async function test() {
  let service = new RedditService(SUBREDDIT);
  let items = await service.fetchItems(20);
  // tslint:disable-next-line:no-console
  console.log(items);
}
