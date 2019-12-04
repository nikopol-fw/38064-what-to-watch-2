import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.USER;

const getActiveGenre = (state) => state[NAME_SPACE].genre;


export {getActiveGenre};
