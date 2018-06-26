import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class Md5HashService {

  private keyword = 'TMS';

  constructor() { }

  hash(time: string) {
    return Md5.hashStr(this.keyword + ':' + time).toString();
  }
}
