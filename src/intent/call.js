import { Subject } from 'rxjs/Subject';

export const call$ = new Subject();

export const call = (...args) => call$.next(args);
