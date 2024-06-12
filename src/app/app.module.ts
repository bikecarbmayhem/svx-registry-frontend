 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './features/about/about.component';
import { HeaderComponent } from './features/header/header.component';
import { ConfiguratorComponent } from './features/configurator/configurator.component';
import { FooterComponent } from './features/footer/footer.component';
 import {RegistryComponent} from "./features/registry/registry.component";
import { RegisterCarComponent } from './features/register-car/register-car.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CarProfileComponent } from './features/car-profile/car-profile.component';
import { CatFactsComponent } from './features/cat-facts/cat-facts.component';
import { CatApiService} from "./services/cat-api.service";
 import {MatButtonModule} from "@angular/material/button";
 import {HttpClientModule} from "@angular/common/http";
 import {MatListModule} from "@angular/material/list";
import { LandingPageComponent } from './features/landing-page/landing-page.component';
 import { MatPaginatorModule } from '@angular/material/paginator';
 import { MatIconModule } from '@angular/material/icon';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './features/login/login.component';
 import {NgxPaginationModule} from 'ngx-pagination';
import { FileUploadComponent } from './features/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ConfiguratorComponent,
    FooterComponent,
    RegistryComponent,
    RegisterCarComponent,
    ProfileComponent,
    CarProfileComponent,
    CatFactsComponent,
    LandingPageComponent,
    LoginComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    NgxPaginationModule
  ],
  providers: [
    provideAnimationsAsync(),
    CatApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
