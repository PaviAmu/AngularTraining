import { Component, OnInit } from '@angular/core';
import {ItemsComponent} from '../items/items.component';
import { ShowHideDirective } from '@angular/flex-layout';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
onRegistertab1 = '' ;
  constructor() { }

  ngOnInit(): void {
  }

onStore1() {
  this.onRegistertab1 = "";
}



}
