import { Subject } from 'rxjs/Subject';

export const getLocal$ = new Subject();

export const getLocal = paths => getLocal$.next(paths);
