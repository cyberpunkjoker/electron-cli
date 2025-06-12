const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getDFiles: () => ipcRenderer.invoke('get-d-drive-files'),
  getFilesFromPython: () => ipcRenderer.invoke('get-d-files-python')
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)

    if (element) element.innerHTML = text
  }

  for(const dependecy of ['chrome', 'node', 'electron']) {
    replaceText(`${dependecy}-version`, process.versions[dependecy])
  }
})