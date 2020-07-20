import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() noOfPages: number;
  @Output() clickedPageNo: EventEmitter<number>;
  pages: Array<number>;
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.noOfPages);
  }
  pageClicked(pageNo){
    console.log('pagination.pageClicked '+pageNo);
    this.clickedPageNo.emit(pageNo);
  }

}
