import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.USER;

const getUserInfo = (state) => state[NAME_SPACE].info;


export {
  getUserInfo,
};
