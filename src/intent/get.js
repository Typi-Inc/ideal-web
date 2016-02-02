import { Subject } from 'rxjs/Subject';

export const get$ = new Subject();

export const get = paths => get$.next(paths);
