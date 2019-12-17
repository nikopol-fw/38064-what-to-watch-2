import moment from 'moment';
import 'moment-duration-format';


export const formatTime = (time: number, unit: `seconds`, format: string): string => {
  return moment.duration(time, unit).format(format, {trim: false});
};
