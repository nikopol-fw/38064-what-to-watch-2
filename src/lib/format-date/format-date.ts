import moment from 'moment';


export const formatDate = (date: Date, format: string): string => {
  return moment(date).format(format);
};
