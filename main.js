const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

  const win = new BrowserWindow({

    width: 1200,
    height: 800,

    minWidth: 900,
    minHeight: 700,
    
    icon: path.join(__dirname, "images/linux-logo.png"),

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }   

  });  
  
  win.setMenuBarVisibility(false);
  win.loadFile("index.html");

}

app.whenReady().then(() => {

  createWindow();

});
