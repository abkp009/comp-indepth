import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Blog } from '../../modals/blog.modal';
import { TruncatePipe } from 'src/app/utils/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit, OnChanges {

  @Input('blog') blog: Blog;
  btnText: string = 'Read';
  blogContentExpanded: string;
  blogContentTruncated: string;
  blogContentFullText: boolean = false;
  showContent: boolean = false;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  ngOnInit(): void {
    if (!this.blog) this.blog = new Blog('title', 'summary', 'content', 'author');
    this.blogContentExpanded = this.blog.content;
    this.blogContentTruncated = this.truncatePipe.transform(this.blog.content, "50");
    this.blog.content = this.blogContentTruncated;
    this.blogContentFullText = false;
    console.log(this.blog);
  }

  showBlogContent() {
    this.showContent = !this.showContent;
  }

  toggleBlogContent() {
    if (this.blogContentFullText) {
      this.blog.content = this.blogContentTruncated;
    } else {
      this.blog.content = this.blogContentExpanded;
    }
    this.blogContentFullText = !this.blogContentFullText;
  }
}
