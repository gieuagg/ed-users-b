import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  unames = ["Ann", "Nik", "Alice", "Dan"];

  constructor() { }

  ngOnInit(): void {
  }

}
