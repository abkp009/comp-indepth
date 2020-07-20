import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Blog } from 'src/app/modals/blog.modal';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[][];
  constructor() { }

  ngOnInit(): void {
    this.blogs = [
      [
        { title: 'title01', summary: 'summary01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', author: 'author01' },
        { title: 'title02', summary: 'summary02', content: 'content02', author: 'author02' },
        { title: 'title03', summary: 'summary03', content: 'content02', author: 'author03' },
        { title: 'title04', summary: 'summary04', content: 'content04', author: 'author04' }
      ],
      [
        { title: 'title11', summary: 'summary11', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', author: 'author11' },
        { title: 'title12', summary: 'summary12', content: 'content12', author: 'author12' },
        { title: 'title13', summary: 'summary13', content: 'content13', author: 'author13' },
        { title: 'title14', summary: 'summary14', content: 'content14', author: 'author14' }
      ],
      [
        { title: 'title21', summary: 'summary21', content: 'content21', author: 'author21' },
        { title: 'title22', summary: 'summary22', content: 'content22', author: 'author22' },
        { title: 'title23', summary: 'summary23', content: 'content23', author: 'author23' },
        { title: 'title24', summary: 'summary24', content: 'content24', author: 'author24' }
      ]
    ]

  }
  paginationPageClicked(e){
    console.log('inside blogListComponent.paginationPageClicked' + e);
  }

}
