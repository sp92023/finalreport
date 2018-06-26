import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class Md5HashService {

  private keyword = 'HC36K';

  constructor() { }

  hash(time: string) {
    return Md5.hashStr(this.keyword + ':' + time).toString();
  }
}
