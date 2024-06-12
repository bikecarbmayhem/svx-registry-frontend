import {Component, OnInit} from '@angular/core';
import {Route} from "../../constants/routes";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  protected readonly route = Route;

  currentRoute: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit():void { //how to figure out what route im on
    console.log(this.router.url);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          console.log(route.url);
          while(route.firstChild) route = route.firstChild;
          this.currentRoute = route.routeConfig?.path!;
          console.log(this.currentRoute);
            return route;
        })
      ).subscribe();
  }

}
