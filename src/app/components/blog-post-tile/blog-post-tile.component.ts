import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Blog } from '../../modals/blog.modal';
import { TruncatePipe } from 'src/app/utils/truncate.pipe';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit, OnChanges {

  @Input('blog') blog: Blog;
  blogContentFullText: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  ngOnInit(): void {
    if (!this.blog) this.blog = new Blog('title', 'summary', 'content', 'author');
    this.blogContentFullText = this.blog.content;
    this.blog.content = this.truncatePipe.transform(this.blog.content, "50");
  }

  expandBlogContent() {
    this.blog.content = this.blogContentFullText;
  }
}
