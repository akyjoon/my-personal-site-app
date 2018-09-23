import { ICategory } from './../category/category.model';
import { ISubcategory } from './../subcategory/subcategory.model';
import { ISubsubcategory } from '../sub-subcategory/sub-subcategory.model';
export interface IPost {
  // _id: string;
  Title: string;
  Content: string;
  // Category: ICategory;
  // Subcategory?: ISubcategory;
  // Subsubcategory?: ISubsubcategory;
  // Tags?: string[];
  // CreateDate: Date;
  // EditDate?: Date;
}
