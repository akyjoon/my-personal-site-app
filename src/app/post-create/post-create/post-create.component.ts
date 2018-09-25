import { PostsService } from './../../services/posts.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { IPost } from './../../../model/post/post.model';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, AfterViewInit{
  posts: IPost[] = [];
  description;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(document).ready(function() {
      $('#summernote').summernote();
    });

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
