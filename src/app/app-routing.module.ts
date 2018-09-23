import { PostCreateComponent } from './post-create/post-create/post-create.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'my-music', component: MyMusicComponent },
  { path: 'create-post', component: PostCreateComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
