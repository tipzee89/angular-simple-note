import { AngularSimpleNotesPage } from './app.po';

describe('angular-simple-notes App', function() {
  let page: AngularSimpleNotesPage;

  beforeEach(() => {
    page = new AngularSimpleNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
