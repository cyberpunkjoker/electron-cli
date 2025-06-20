import { spawn } from 'child_process'
import path from 'node:path'
import { pythonPath } from 'el/constants/base';
import { IGetPython } from 'el/types/common';

/**
 * @description 获取 python 脚本的执行结果
 */
export const getInfoFromPython = async(props: IGetPython) => {

  const { pathName, laguage = 'python', params = [] } = props

  return new Promise((resolve, reject) => {
      const scriptPath = path.join(__dirname, `${pythonPath}/${pathName}`)

      const py = spawn(laguage, [scriptPath, ...params]);

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
          resolve(parsed);
        } catch (err) {
          reject('JSON 解析失败: ' + data);
        }
      });
    });
}