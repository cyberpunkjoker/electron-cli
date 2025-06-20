
import { app, BrowserWindow } from 'electron'
import path from 'node:path'

import { isDev } from './constants/base'
import toRegisterEvents from './utils/eventRegistration'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    console.log('Running in development mode')
    win.loadURL('http://localhost:3024')
    win.webContents.openDevTools();
  } else {
    // TODO: 打包后文件地址
    // win.loadFile('index.html');
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

toRegisterEvents()