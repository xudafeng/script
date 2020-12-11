'use strict';

const url = require('url');
const path = require('path');
const _ = require('lodash');
const WindowManager = require('..');
const { ipcMain, screen, BrowserWindow } = require('electron');

const loadingUrl = url.format({
  pathname: path.join(__dirname, 'renderer', 'loading.html'),
  protocol: 'file:',
});

const mainUrl = url.format({
  pathname: path.join(__dirname, 'renderer', 'main.html'),
  protocol: 'file:',
});

const windowUrl = url.format({
  pathname: path.join(__dirname, 'renderer', 'window.html'),
  protocol: 'file:',
});

const getRandomPostion = () => {
  const { workAreaSize } = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = workAreaSize;
  const x = parseInt(_.random(screenWidth / 16, screenWidth / 2), 10);
  const y = parseInt(_.random(screenHeight / 16, screenHeight / 2), 10);
  return {
    x,
    y,
  };
};

class App {
  windowManager = new WindowManager();

  init() {
    const mainWindow = this.windowManager.create({
      name: 'main',
      loadingView: {
        url: loadingUrl,
      },
      browserWindow: {
        webPreferences: {
          nodeIntegration: true,
          webSecurity: true,
          webviewTag: true,
          preload: path.join(__dirname, 'renderer', 'preload.js'),
        },
      },
    });
    mainWindow.loadURL(mainUrl);
    this.bindIPC();
  }

  bindIPC() {
    ipcMain.on('new-window', (_, data) => {
      const postion = getRandomPostion();
      const window = this.windowManager.create({
        name: Date.now(),
        loadingView: {
          url: loadingUrl,
        },
        browserWindow: {
          x: postion.x,
          y: postion.y,
          webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            webviewTag: true,
            preload: path.join(__dirname, 'renderer', 'preload.js'),
          },
        },
      });

      window.loadURL(windowUrl);
      console.log(this.windowManager);
    });

    ipcMain.on('new-online-window', (_, data) => {
      const postion = getRandomPostion();
      const window = this.windowManager.create({
        name: Date.now(),
        loadingView: {
          url: loadingUrl,
        },
        browserWindow: {
          x: postion.x,
          y: postion.y,
          webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            webviewTag: true,
            preload: path.join(__dirname, 'renderer', 'preload.js'),
          },
        },
      });

      window.loadURL('https://www.github.com');
      console.log(this.windowManager);
    });

    ipcMain.on('close-window', (_, data) => {
      const window = BrowserWindow.fromWebContents(_.sender);
      window.close();
      console.log(this.windowManager);
    });
  }
}

module.exports = App;