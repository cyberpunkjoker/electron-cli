import { contextBridge, ipcRenderer } from 'electron';
import { EVENT_NAMES, WINDOWS_EVENT_NAMES } from 'shared/constants/events';


const toPreloadEvents = () => {
  contextBridge.exposeInMainWorld('electronAPI', {
    [WINDOWS_EVENT_NAMES.GET_D_FILES]: () => ipcRenderer.invoke(EVENT_NAMES.GET_D_FILES),
    [WINDOWS_EVENT_NAMES.GET_D_FILES_BY_PY]: () => ipcRenderer.invoke(EVENT_NAMES.GET_D_FILES_BY_PY)
  });
}

export default toPreloadEvents;
