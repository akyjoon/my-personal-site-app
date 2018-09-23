import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from './../../../src/model/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
          this.posts = posts;
        });
  }

}
