const { app, BrowserWindow, ipcMain} = require('electron')
const path = require("node:path")
const {getFilesInDrive} = require("./script/node/getfileNames")
const { spawn } = require('child_process')

const isDev = process.env.NODE_ENV === 'development'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:3020')
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


ipcMain.handle('get-d-drive-files', async () => {
  return getFilesInDrive(); // 返回文件列表
});

ipcMain.handle('get-d-files-python', async () => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, '/script/python/list_d_files.py')

    const py = spawn('python', [scriptPath]);

    let data = '';
    py.stdout.on('data', (chunk) => {
      data += chunk.toString();
    });

    py.stderr.on('data', (err) => {
      console.error('Python error:', err.toString());
    });

    py.on('close', () => {
      try {
        const parsed = JSON.parse(data);
        console.log('py----------->', parsed)
        resolve(parsed);
      } catch (err) {
        reject('JSON 解析失败: ' + data);
      }
    });
  });
});