import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Route} from "../../constants/routes";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  form: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      name: ['Edin'],
      lastName: [],
      age: [],
    })
  }


  //to define a variable you can just name it outright like title; but it is determined by the value you give it i.e. title:datatype; .
  clickButton(): void {
    console.log(this.form.value);
    this.router.navigate([Route.home, 'registry']);
  }

}
