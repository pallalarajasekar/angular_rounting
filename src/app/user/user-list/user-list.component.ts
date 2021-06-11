import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user = [
    {

      "name": "Raja",
      "id": "123",
      "age": "28",
      "location": "hyderabad",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Thara",
      "id": "134",
      "age": "25",
      "location": "chennai",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Guna",
      "id": "126",
      "age": "30",
      "location": "vizag",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Janu",
      "id": "125",
      "age": "24",
      "location": "pune",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Raja sekar",
      "id": "129",
      "age": "25",
      "location": "bangalore",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },

  ]

  constructor() { }
  newUserList: any;
  editUserList: any;
  objIndex;
  ngOnInit(): void {

    this.newUserList = JSON.parse(localStorage.getItem('userObject'));
    this.editUserList = JSON.parse(localStorage.getItem('editObject'));
    console.log(this.newUserList);
    if (this.newUserList) {
      Object.assign(this.newUserList, { edit: "fa fa-times", view: "fa fa-eye" });
      console.log(this.newUserList);
      this.user.push(this.newUserList);
      console.log(this.user);
      localStorage.removeItem('userObject');
    }else if(this.editUserList){
      Object.assign(this.editUserList, { edit: "fa fa-times", view: "fa fa-eye" });
      this.objIndex = this.user.findIndex((obj => obj.name == this.editUserList.name));
      console.log(this.objIndex);
      this.user[this.objIndex] = this.editUserList;
      console.log(this.user);
      localStorage.removeItem('editObject');
    }


  }

  userView(viewData: object) {
    console.log(viewData);
    localStorage.setItem('userViewObject', JSON.stringify(viewData));
  }
  userEdit(editData: object) {
    console.log(editData);
    localStorage.setItem('userViewObject', JSON.stringify(editData));
  }

}
