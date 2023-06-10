const { screen, globalShortcut, app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const os = require("os");
const shell = require("electron").shell;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  globalShortcut.register("f5", function() {
    mainWindow.reload();
  });

  var menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        {
          label: "Github",
          click() {
            shell.openExternal("https://www.github.com");
          },
        },
        {
          label: "Fremhæv byer",
          click() {
            mainWindow.webContents.send("updateLi", { color: "red" });
          },
        },
        {
          label: "Stifinder",
          click() {
            shell.showItemInFolder(os.homedir());
          },
        },
        {
          label: "F12 vindue",
          click() {
            mainWindow.webContents.openDevTools();
          },
        },
        {
          label: "Gem data i udklipsholder",
          click() {
            mainWindow.webContents.send("gemData", {});
          },
        },
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
