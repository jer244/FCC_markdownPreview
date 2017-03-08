import { browser, element, by } from 'protractor';

export class MarkdownPreviewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('md-root h1')).getText();
  }
}
