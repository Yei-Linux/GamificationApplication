import { Injectable } from '@nestjs/common';
import { GetResultCompilerResponse } from './response';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vm = require('vm');
import { PythonShell } from 'python-shell';

interface IGetResultCompilerService {
  handle(code: string, language: string): Promise<GetResultCompilerResponse>;
}

@Injectable()
export class GetResultCompilerService implements IGetResultCompilerService {
  async handle(code: string, language: string): Promise<any> {
    try {
      switch (language) {
        case 'JS':
          const script = new vm.Script(code);
          script.runInThisContext();
          const cacheWithX = script.createCachedData();
          return cacheWithX;
        case 'PY':
          return new Promise(async function (resolve, reject) {
            PythonShell.runString(code, null, function (err, results) {
              if (err) {
                reject(err.traceback.toString());
                return;
              }
              for (const i of results) {
                console.log(i, '---->', typeof i);
              }
              resolve(results);
            });
          });
        default:
          null;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
