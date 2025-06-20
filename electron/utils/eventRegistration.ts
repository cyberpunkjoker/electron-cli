import { ipcMain } from 'electron'
import { getFilesInDrive } from 'el/script/node/getfileNames';
import { EVENT_NAMES } from 'shared/constants/events';
import { getInfoFromPython } from 'el/common';

const toRegisterEvents = () => {
  ipcMain.handle(EVENT_NAMES.GET_D_FILES, async () => {
    return getFilesInDrive();
  });

  ipcMain.handle(EVENT_NAMES.GET_D_FILES_BY_PY, async () => {
    return await getInfoFromPython({ pathName: 'list_d_files.py' })
  });
}

export default toRegisterEvents;