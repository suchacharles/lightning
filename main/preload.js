const { ipcRenderer, contextBridge } = require('electron')

const electron = require('electron')

contextBridge.exposeInMainWorld('electron', {
  message: {
    send: (payload) => ipcRenderer.send('message', payload),
    on: (handler) => ipcRenderer.on('message', handler),
    off: (handler) => ipcRenderer.off('message', handler),
  },
})

process.once('loaded', () => {
  global.ipcRenderer = electron.ipcRenderer
})
