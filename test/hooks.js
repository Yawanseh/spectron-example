require('dotenv').config();

import { Application } from 'spectron';
import { should } from 'chai';
import electron from 'electron';

global.before(() => {
  should();
});

export async function startApp() {
  const app = new Application({
    path: electron,
    path: process.env.APP_PATH
  })
  return app.start();
}

export async function stopApp(app) {
  if (app && app.isRunning()) {
    await app.stop();
  }
}
