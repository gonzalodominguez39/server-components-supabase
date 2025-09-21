import { authorType } from "./author";
import { categoryType } from "./category";

  export type postType = {
  id: number;
  title: string;
  description: string;
  publish_date: string; 
  image: string;
  category: categoryType | categoryType[]
  author: authorType|authorType[]
};