import { RsaTsPage } from './app.po';

describe('rsa-ts App', () => {
  let page: RsaTsPage;

  beforeEach(() => {
    page = new RsaTsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
