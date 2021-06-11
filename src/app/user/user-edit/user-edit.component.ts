import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  formGroup: FormGroup;
  editUser: object
  viewUser: any
  ngOnInit(): void {

    this.viewUser = JSON.parse(localStorage.getItem('userViewObject'));

    this.buildForm();



  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: [this.viewUser.name, Validators.required],
      id: [this.viewUser.id, Validators.required],
      age: [this.viewUser.age, Validators.required],
      location: [this.viewUser.location, Validators.required],
    })

  }
  editUsers() {
    this.editUser = this.formGroup.value;
    localStorage.setItem('editObject', JSON.stringify(this.editUser));
    console.log(this.editUser);
  }
}