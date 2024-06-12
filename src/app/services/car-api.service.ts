import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { carDto } from "../models/carDto";
import { Car } from "../models/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  private url: string = 'https://localhost:8080/api/cars';

  constructor(private http: HttpClient) {}


  public getCars(): Observable<carDto[]> {
    return this.http.get<carDto[]>(this.url);
  }

  public getCarByFrame(frame: number): Observable<carDto> {
    return this.http.get<carDto>(`${this.url}/${frame}`);
  }
  
  // Update an existing car entry
  public updateCar(car: carDto): Observable<carDto> {
    return this.http.put<carDto>(`${this.url}/${car.frame}`, car);
  }

}
