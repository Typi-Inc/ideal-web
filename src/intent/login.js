import { Subject } from 'rxjs/Subject';

export const login$ = new Subject();

export const login = token => login$.next(token);
