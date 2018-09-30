import { CategoryService } from './../services/category.service'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICategory } from './../../model/category/category.model';
import { ISubcategory } from './../../model/subCategory/subcategory.model';
import { ISubsubcategory } from './../../model/sub-subcategory/sub-subcategory.model';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(public CategoryService: CategoryService) { }

  ngOnInit() {
  }

  onAddCategory(categoryForm: NgForm) {
    if (categoryForm.invalid) {
      return;
    }
    this.CategoryService.addCategory(categoryForm.value.categoryName, categoryForm.value.subCategoryName, categoryForm.value.subSubCategoryName)
  }
}
