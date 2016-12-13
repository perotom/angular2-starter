import { VertxTestPage } from './app.po';

describe('vertx-test App', function() {
  let page: VertxTestPage;

  beforeEach(() => {
    page = new VertxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
