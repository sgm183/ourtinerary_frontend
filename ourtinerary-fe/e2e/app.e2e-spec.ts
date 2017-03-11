import { OurtineraryFePage } from './app.po';

describe('ourtinerary-fe App', function() {
  let page: OurtineraryFePage;

  beforeEach(() => {
    page = new OurtineraryFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
