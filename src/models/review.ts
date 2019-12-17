export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};
