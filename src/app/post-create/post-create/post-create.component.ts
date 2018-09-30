import { PostsService } from './../../services/posts.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { IPost } from './../../../model/post/post.model';
import { ICategory } from './../../../model/category/category.model';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, AfterViewInit, OnChanges{
  posts: IPost[] = [];
  categories: ICategory[] = [];

  constructor(public postsService: PostsService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();

  }

  ngAfterViewInit(){
    $(document).ready(function() {
      $('#summernote').summernote();
    });
  }
  ngOnChanges() {
    this.categoryService.getCategoriesUpdateListener()
    .subscribe((categories: ICategory[]) => {
      this.categories = categories;
    })
  }
  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    let cont = document.querySelector('#summernote').nextElementSibling.querySelector('.note-editable').innerHTML;

    let date: Date = new Date(Date.now());
    this.postsService.addPost(postForm.value.title, cont, date, postForm.value.category);
  }

}
