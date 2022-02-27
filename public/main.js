const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });
  
    // win.loadFile('./public/index.html');
    win.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
  
    // Open the DevTools.
    if (isDev) {
      win.webContents.openDevTools({ mode: "detach" });
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