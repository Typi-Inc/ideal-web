import { Subject } from 'rxjs/Subject';

export const toggleTag$ = new Subject();

export const toggleTag = text => toggleTag$.next(text);
