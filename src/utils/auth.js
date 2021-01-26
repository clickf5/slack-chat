import faker from 'faker';
import Cookies from 'js-cookie';

const expires = 7;

const authenticate = () => {
  const currentNickName = Cookies.get('ninckname');

  if (typeof currentNickName !== 'undefined') {
    return currentNickName;
  }

  const randomNickName = faker.internet.userName();
  Cookies.set('ninckname', randomNickName, { expires, secure: true, sameSite: 'Lax' });
  return randomNickName;
};

export default authenticate;
