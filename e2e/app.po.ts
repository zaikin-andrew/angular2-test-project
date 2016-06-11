export class Angular2TestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-test-project-app h1')).getText();
  }
}
