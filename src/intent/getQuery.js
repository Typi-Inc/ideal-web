import Rx from 'rx';

export const getQuery$ = new Rx.ReplaySubject(1);

export const getQuery = (paths, loadingKey) => getQuery$.onNext(paths, loadingKey);
