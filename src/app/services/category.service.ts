import { Injectable } from '@angular/core';
import { ICategory } from '../../model/category/category.model';
import { ISubcategory } from '../../model/subcategory/subcategory.model';
import { ISubsubcategory } from '../../model/sub-subcategory/sub-subcategory.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: ICategory[] = [];
  private categoriesUpdated = new Subject<ICategory[]>();

  constructor() { }
  getCategories(){
    return [...this.categories];
  }
  
  getCategoriesUpdateListener() {
    return this.categoriesUpdated.asObservable();
  }
  addCategory(
    categoryName: string,
    subCategoryName: string,
    subSubCategoryName: string) {
      const subSubCategory: ISubsubcategory = {
        Name: subSubCategoryName
      }
      const subCategory: ISubcategory = {
        Name: subCategoryName,
        Subsubcategory: subSubCategory
      }
      const category: ICategory = {
        Name: categoryName,
        Subcategory: subCategory,
        Subsubcategory: subSubCategory
      }
      this.categories.push(category);
      this.categoriesUpdated.next([...this.categories])
  }
}
