import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor() { }
  viewuser: any;
  name: string;
  id: string;
  age: string;
  location: string;
  ngOnInit(): void {

    this.viewuser = JSON.parse(localStorage.getItem('userViewObject'));
    this.name = this.viewuser.name;
    this.id = this.viewuser.id;
    this.age = this.viewuser.age;
    this.location = this.viewuser.location;
    console.log(this.viewuser);
  }

}


