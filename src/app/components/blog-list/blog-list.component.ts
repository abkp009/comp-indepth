import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Blog } from 'src/app/modals/blog.modal';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[][];
  currentPage: number = 0;
  // @ViewChild('tile') blogTileComponent: BlogPostTileComponent; - for 1 child
  @ViewChildren('tile') blogTileComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogDataSvc: BlogDataService) { }

  ngOnInit(): void {
    this.blogs = this.blogDataSvc.getData();

  }

  clickedPageEventListener(e) {
    console.log('inside blogListComponent.paginationPageClicked ' + e);
    this.updatePage(e);

  }

  updatePage(newPage) {
    this.currentPage = newPage;
  }

  expandAllChildren() {
    this.blogTileComponents.forEach((tile) => {
      tile.expandBlogContent();
    });
  }

}
