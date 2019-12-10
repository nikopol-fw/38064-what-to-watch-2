import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.USER;

const getActiveGenre = (state) => state[NAME_SPACE].genre;
const getUserInfo = (state) => state[NAME_SPACE].info;


export {
  getActiveGenre,
  getUserInfo,
};
