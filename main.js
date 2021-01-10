// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,
  Tray
} = require('electron')

const {
  autoUpdater
} = require("electron-updater")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Start Single Instance ---------------------------------------------------
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
      mainWindow.show()
    }
  })

  // Create mainWindow, load the rest of the app, etc...
  app.on('ready', () => {})
}
// End Single Instance ------------------------------------------------------

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //icon: __dirname + './public/img/icon.ico',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: false,
      contextIsolation: false
    },
    backgroundColor: '#FFFFFF'
  })

  mainWindow.setMenuBarVisibility(false)

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Keep In Tray
  mainWindow.on('close', function (event) {
    event.preventDefault();
    mainWindow.hide();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let tray = null
app.on('ready', () => {
  tray = new Tray('./public/img/icon.ico')
  const contextMenu = Menu.buildFromTemplate([{
      label: 'Lightning',
      click: function () {
        mainWindow.show();
      }
    },
    {
      label: 'A port forwarding utility.',
      enabled: false
    },
    {
      label: 'Created by SuchACharles.',
      enabled: false
    },
    {
      type: "separator"
    },
    {
      label: 'Report An Issue',
      click() {
        require('electron').shell.openExternal('https://github.com/SuchACharles/Lightning/issues')
      }
    },
    {
      label: 'About',
      click() {
        require('electron').shell.openExternal('https://github.com/SuchACharles/Lightning')
      }
    },
    {
      type: "separator"
    },
    {
      label: "Quit",
      click: function () {
        mainWindow.destroy();
        app.quit();
      }
    }
  ])
  tray.setToolTip('Lightning')
  tray.setContextMenu(contextMenu)
})

// Auto Update
autoUpdater.checkForUpdatesAndNotify()