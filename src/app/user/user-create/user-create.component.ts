import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  formGroup: FormGroup;
  newUser: object
  ngOnInit(): void {

    this.buildForm();



  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required],
    })

  }
  createUser() {
    this.newUser = this.formGroup.value;
    localStorage.setItem('userObject', JSON.stringify(this.newUser));
    console.log(this.newUser);
  }
}