import { ICategory } from './../../model/category/category.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() categories: ICategory[] = [];

  constructor() { }

  ngOnInit() {
  }

}
