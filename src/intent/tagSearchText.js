import { Subject } from 'rxjs/Subject';

export const tagSearchText$ = new Subject();

export const tagSearchText = text => tagSearchText$.next(text);
