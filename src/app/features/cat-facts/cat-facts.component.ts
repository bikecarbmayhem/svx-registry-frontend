import {Component, OnDestroy} from '@angular/core';
import {CatApiService} from "../../services/cat-api.service";
import {Subject, takeUntil} from "rxjs";
import {CatDto} from "../../models/catDto";
import {CatFact} from "../../models/cat.interface";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnDestroy {

  facts: CatFact[] = [];

  constructor(private service: CatApiService) {
  }



  destroy$: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

  //callback is just a function.

//  getFact(): void {
//    const returnFromMethod =  this.service.getCatFacts()
//    returnFromMethod.subscribe(this.callback); //kad mi vratis nesto, izvrsi nesto
//    console.log(returnFromMethod);}

  //better version
  //returnFromMethod is used
//  getFact(): void {
 //   const returnFromMethod = this.service.getCatFacts()
 //   returnFromMethod.subscribe( (item:any) => { console.log(item); })
//  }

  //memory leak prevention test!
  getFact(): void {
    this.service.getCatFacts()
      .pipe(takeUntil(this.destroy$)) //while destroy is active, we are subscribed and logging in the console
      .subscribe( (item: CatDto) => {
        const includesKitten = item.fact.toLowerCase().indexOf('kitten') >= 0;
        const catFact: CatFact = {
          fact: item.fact,
          length: item.length,
          includesKitten: includesKitten,
        }
        this.facts.push(catFact); //model; DTO. data transfer object.
      console.log(item);
      //between frontend and backend, should be the same podatak that communictes
        //the one that is the same on frontend and backend is called the DTO/ data transfer object.
    })
    //dont use any!! use the corresponding data type
  }

  //subscribe is from rxjs, used alot in the industry. will only be covering subscribe though.

  //property is equal to
  //anonymous! we just THINK this function is called callback3
  callback3 = (item: any) => {
    console.log('called callback3 here!');
  }

  callback(item:any): void {
    console.log(item);
  }
}
