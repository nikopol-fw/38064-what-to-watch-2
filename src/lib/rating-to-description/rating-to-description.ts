const USER_RATING = [
  {title: `bad`, min: 0},
  {title: `normal`, min: 3},
  {title: `good`, min: 5},
  {title: `very good`, min: 8},
  {title: `awesome`, min: 10},
];

export const ratingToDescription = (rating: number): string => {
  const ratings = USER_RATING.slice().reverse();
  return ratings.find((rank) => rating >= rank.min).title;
};
