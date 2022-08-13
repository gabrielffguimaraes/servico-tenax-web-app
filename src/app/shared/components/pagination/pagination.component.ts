import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output("displayPage")
  displayPage:EventEmitter<any> = new EventEmitter<any>()

  @Input("totalPages")
  totalPages!:number;

  currentPage:number = 0;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    /* Observable queryParams , displaying current
    *  page numbers to parent class
    */
    this.route.queryParamMap.subscribe(params => {
      if(params.has("page")) {
        this.currentPage = parseInt(<string>params.get("page"));
        this.currentPage = (this.currentPage >=0) ? this.currentPage : 0;
        this.displayPage.emit(this.currentPage);
      }
    });
  }

  next():void {
    let next = this.currentPage + 1;
    next = (next >= this.totalPages) ? this.totalPages - 1 : next;
    this.router.navigate([],{queryParams:{page : next}});
  }
  previous():void {
    let previous = this.currentPage - 1;
    previous = (previous < 0) ? 0 : previous;
    this.router.navigate([],{queryParams:{page : previous}});
  }
}
