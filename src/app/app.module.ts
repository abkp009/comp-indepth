import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './components/blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TruncatePipe } from './utils/truncate.pipe';
import { PaginationComponent } from './components/pagination/pagination.component'
import {BlogDataService} from './services/blog-data.service'

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TruncatePipe, BlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
