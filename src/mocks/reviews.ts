import {Review} from "../models/review";


export const reviews: Review[] = [{
  id: 1,
  rating: 1.3,
  comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
  date: new Date(`2019-12-05T19:57:19.384Z`),
  user: {
    id: 16,
    name: `Mollie`,
  }
}, {
  id: 2,
  rating: 2.7,
  comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
  date: new Date(`2019-11-30T19:57:19.384Z`),
  user: {
    id: 12,
    name: `Isaac`,
  }
}];
