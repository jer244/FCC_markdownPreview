import { MarkdownPreviewPage } from './app.po';

describe('markdown-preview App', () => {
  let page: MarkdownPreviewPage;

  beforeEach(() => {
    page = new MarkdownPreviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('md works!');
  });
});
