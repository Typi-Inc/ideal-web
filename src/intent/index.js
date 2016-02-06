import { get$ } from './get';
import { getLocal$ } from './getLocal';
import { login$ } from './login';
import { logout$ } from './logout';

const intent = () => ({
  get$,
  getLocal$,
  login$,
  logout$
});

export default intent;
export { get } from './get';
export { getLocal } from './getLocal';
export { login } from './login';
export { logout } from './logout';
