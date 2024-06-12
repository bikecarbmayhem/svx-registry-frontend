import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css',
})
export class RegistryComponent {
  p: number = 1;
  collection: any[] = [1,2,3,4,5,6,7,8,9];


  /*

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['Edin'],
      lastName: [],
      age: [],
    })
  }


  //to define a variable you can just name it outright like title; but it is determined by the value you give it i.e. title:datatype; .
  clickButton(): void {
    console.log(this.form.value);
  }
*/
}
