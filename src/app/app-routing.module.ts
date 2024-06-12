import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {AboutComponent} from "./features/about/about.component";
import {RegistryComponent} from "./features/registry/registry.component";
import {Route} from "./constants/routes";
import {CatFactsComponent} from "./features/cat-facts/cat-facts.component";
import {LandingPageComponent} from "./features/landing-page/landing-page.component";
import {CarProfileComponent} from "./features/car-profile/car-profile.component";
import {RegisterCarComponent} from "./features/register-car/register-car.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
     path: Route.home,
     component: HomeComponent,

  } ,
  {

    path: Route.registry,
    component: RegistryComponent

  },
  {
    path: Route.carProfile,
    component: CarProfileComponent
  },
  {
    path: Route.about,
    component: AboutComponent
  } ,
  {
    path: Route.catFacts,
    component: CatFactsComponent
  },
  {
    path: Route.registerCar,
    component: RegisterCarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
