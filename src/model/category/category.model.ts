import { ISubcategory } from './../subcategory/subcategory.model';
import { ISubsubcategory} from './../sub-subcategory/sub-subcategory.model';
export interface ICategory {
  // _id: string;
  Name: string;
  Subcategory?: ISubcategory;
  Subsubcategory?: ISubsubcategory;
}
