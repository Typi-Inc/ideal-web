import { get$ } from './get';
import { getLocal$ } from './getLocal';
import { call$ } from './call';
import { login$ } from './login';
import { logout$ } from './logout';

const intent = () => ({
  get$,
  getLocal$,
  call$,
  login$,
  logout$
});

export default intent;
export { get } from './get';
export { getLocal } from './getLocal';
export { call } from './call';
export { login } from './login';
export { logout } from './logout';
