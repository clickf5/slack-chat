import faker from 'faker';
import Cookies from 'js-cookie';

const expires = 7;

const authenticate = () => {
  const currentNickName = Cookies.get('ninckname');

  if (currentNickName) {
    return currentNickName;
  }

  const randomNickName = faker.internet.userName();
  Cookies.set('ninckname', randomNickName, { expires });
  return randomNickName;
};

export default authenticate;
