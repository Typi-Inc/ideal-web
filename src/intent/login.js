import { Subject } from 'rxjs/Subject';

export const login$ = new Subject();

export const login = (profile, token) => login$.next({ profile, token });
