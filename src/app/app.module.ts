import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '../../node_modules/@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule, MatCardModule, MatSelectModule } from '../../node_modules/@angular/material';
import { MatFormFieldModule } from '../../node_modules/@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './/app-routing.module';
import { MyMusicComponent } from './my-music/my-music.component';
import { PostCreateComponent } from './post-create/post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { SafeHtmlPipe } from './Pipes/html-sanitizer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyMusicComponent,
    PostCreateComponent,
    PostListComponent,
    SafeHtmlPipe,
    CategoryCreateComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
