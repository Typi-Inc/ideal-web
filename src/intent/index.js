import { get$ } from './get';
import { getLocal$ } from './getLocal';
import { call$ } from './call';
import { login$ } from './login';
import { logout$ } from './logout';
import { toggleTag$ } from './toggleTag';
import { tagSearchText$ } from './tagSearchText';

const intent = () => ({
  get$,
  getLocal$,
  call$,
  login$,
  logout$,
  toggleTag$,
  tagSearchText$
});

export default intent;
export { get } from './get';
export { getLocal } from './getLocal';
export { call } from './call';
export { login } from './login';
export { logout } from './logout';
export { toggleTag } from './toggleTag';
export { tagSearchText } from './tagSearchText';
