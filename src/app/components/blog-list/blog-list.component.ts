import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/modals/blog.modal';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  constructor() { }

  ngOnInit(): void {
    this.blogs.push(new Blog('title1', 'summary1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'author1'));
    this.blogs.push(new Blog('title2', 'summary2', 'content2', 'author2'));
    this.blogs.push(new Blog('title3', 'summary3', 'content3', 'author3'));
  }

}
