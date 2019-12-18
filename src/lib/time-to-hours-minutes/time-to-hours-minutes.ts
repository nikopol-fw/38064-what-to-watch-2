const MINUTES_IN_HOUR = 60;

export const timeToHoursMinutes = (timeInMinutes: number): string => {
  const minutes = timeInMinutes % MINUTES_IN_HOUR;
  const hours = (timeInMinutes - minutes) / MINUTES_IN_HOUR;

  return `${hours ? hours + `h ` : ``}${minutes}m`;
};
