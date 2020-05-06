import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root',
})
export class HashService {

    generateMd5(value: string): string {
        const md5 = new Md5();
        return md5.appendStr(value).end().toString();
    }

}
