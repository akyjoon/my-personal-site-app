import { ICategory } from './../../model/category/category.model';
import { IPost } from './../../model/post/post.model';
import { ISubcategory } from '../../model/subcategory/subcategory.model';
import { ISubsubcategory } from '../../model/sub-subcategory/sub-subcategory.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: IPost[] = [];
  private postsUpdated = new Subject<IPost[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(
    // id: string,
    title: string,
    content: string,
    // createDate: Date,
    // editDate: Date,
    // category: ICategory,
    // subcategory?: ISubcategory,
    // subsubcategory?: ISubsubcategory,
    // tags?: string[]
  ) {
      const post: IPost = {
        // _id: id,
        Title: title,
        Content: content,
        // CreateDate: createDate,
        // EditDate: editDate,
        // Category: category,
        // Subcategory: subcategory,
        // Subsubcategory: subsubcategory,
        // Tags: tags
      };
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
  }
}
