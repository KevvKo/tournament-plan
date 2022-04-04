const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
      width: 900, height: 680,
      icon:`file://${path.join(__dirname, '../src/assets/logo.jpeg')}`
    });

    mainWindow.setIcon(path.join(__dirname, '../src/assets/logo.jpeg'));
    mainWindow.loadURL(
      isDev 
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "/logo.jpeg")}`
    );
      
      mainWindow.on("closed", () => (mainWindow = null));

      if (isDev) {
        mainWindow.webContents.openDevTools({ mode: "detach" });
      }
    
    }

  
    app.on( "ready", createWindow);
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin")
        {app.quit();}
      }
    );

    app.on("activate", () => {if (mainWindow === null) {createWindow();}});