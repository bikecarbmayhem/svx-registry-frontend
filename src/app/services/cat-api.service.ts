import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {CatDto} from "../models/catDto";
import {CatListItem} from "../models/cat-list-item.interface";

//singleton; one class will always exist. will never need a new instance of CatApiService.
@Injectable()
export class CatApiService {

  private url: string = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {

  }
    //obecanje da ce mo dobiti podatak i guess
    // pozivamo -> cekamo obicanje. asynchronous in nature
  public getCatFacts(): Observable<CatDto> {
    return this.http.get<CatDto>(this.url);
  }

   public getAllCats(): Observable<CatListItem[]> {
     return of([
       { name: 'Rex',age: 2 },
       { name: 'Lex',age: 8 },
       { name: 'Sex',age: 4 },
     ]);
   }
}
