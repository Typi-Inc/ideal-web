import { Subject } from 'rxjs/Subject';

export const logout$ = new Subject();

export const logout = () => logout$.next();
