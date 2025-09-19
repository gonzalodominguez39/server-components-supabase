import { authorType } from "./author";
import { categoryType } from "./category";

  export type postType = {
  id: number;
  title: string;
  description: string;
  publish_date: string; // o Date si lo parseás
  image: string;
  categories: categoryType[]
  authors: authorType[]
};