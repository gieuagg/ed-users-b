import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // uname;
  // uname: any;
  // uname: string;
  // public uname: string = "Maria";
  @Input() uname: string = "Maria";

  constructor() { 
    // this.uname = 'Mike';
    // let aVariable = 10;
  }

  ngOnInit(): void {
    // this.uname = 'Ann';   
  }
}
