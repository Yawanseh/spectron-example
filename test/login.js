import { startApp, stopApp } from './hooks';
import { homePageSelectors, libraryPageSelectors } from './selectors';

describe('Sample Test', () => {
  let app;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async() => {
    await stopApp(app);
  });


it('should create a new browser', async() => {
    // click the library menu button
    const libraryButton = await app.client.$(homePageSelectors.libraryMenuButton)
    await libraryButton.click()

    // click the add new button
    const addNewButton = await app.client.$(libraryPageSelectors.addNewButton)
    await addNewButton.click();

    // click browser demo button
    const menu = await app.client.$(libraryPageSelectors.addBrowserButton);
    const menuItems = await menu.$$('a');
    await menuItems[2].click();

    // fill text input
    const titleInput = await app.client.$(libraryPageSelectors.browserTitleInput);
    await titleInput.setValue('test');

    // submit form button
    const formSaveBrowserButton = await app.client.$(libraryPageSelectors.submitButton);
    await formSaveBrowserButton.click();

    // check if the browser is added
    const browserListGrid = await app.client.$(libraryPageSelectors.browserGrid);
    const isGridDisplayed = await browserListGrid.isDisplayed();

    // check if the list of browsers is shown again
    isGridDisplayed.should.equal(true);
  });
});
