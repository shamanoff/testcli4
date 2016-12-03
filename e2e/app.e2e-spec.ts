import { Testcli4Page } from './app.po';

describe('testcli4 App', function() {
  let page: Testcli4Page;

  beforeEach(() => {
    page = new Testcli4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
