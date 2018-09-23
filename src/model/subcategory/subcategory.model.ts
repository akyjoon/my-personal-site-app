import { ISubsubcategory} from './../sub-subcategory/sub-subcategory.model';

export interface ISubcategory {
  _id: string;
  Name: string;
  Subsubcategory?: ISubsubcategory;
}
