import { PostsService } from './../../services/posts.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { IPost } from './../../../model/post/post.model';
import {QuillModule} from 'ngx-quill'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  posts: IPost[] = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {}

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    let date: Date = new Date(Date.now());

    this.postsService.addPost(postForm.value.title, postForm.value.content, date, postForm.value.category,);
  }

}
