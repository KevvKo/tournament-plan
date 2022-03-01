const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");

const createWindow = () => {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });
  
    const startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    });    
  
    window.loadURL( startUrl );
  
    // Open the DevTools.
    if (isDev) {
      window.webContents.openDevTools({ mode: "detach" });
    }
  };

  app.whenReady().then(() => {
      createWindow();

      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
      });
  });

  // dont close app, if os is macOs
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });