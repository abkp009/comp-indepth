import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../modals/blog.modal';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {
  @Input('blog') blog: Blog;
  showContent: boolean = false;
  btnText: string = 'Read';
  constructor() { }

  ngOnInit(): void {
    if (!this.blog) this.blog = new Blog('title', 'summary', 'content', 'author');
    console.log(this.blog);
  }

  readBtnClicked(){
    this.showContent = !this.showContent;
    if (this.showContent) this.btnText = 'Hide'
    else this.btnText = 'Read';
  }

}
