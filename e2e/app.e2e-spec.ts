import { Angular2AuthDemoPage } from './app.po';

describe('angular2-auth-demo App', function() {
  let page: Angular2AuthDemoPage;

  beforeEach(() => {
    page = new Angular2AuthDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
