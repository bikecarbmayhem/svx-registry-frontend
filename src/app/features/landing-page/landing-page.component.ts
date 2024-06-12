import {Component, OnInit} from '@angular/core';
import {CatApiService} from "../../services/cat-api.service";
import {CatListItem} from "../../models/cat-list-item.interface";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  allCats: CatListItem[] = [];

  //constructor that allows us to use the service
  constructor(private service: CatApiService) {
  }

  ngOnInit(): void {                    //subscribe,along with callback
    this.service.getAllCats().subscribe(cats => {
      this.allCats = cats;

    });
  }
}
