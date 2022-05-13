import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL:string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient){ }

  //getter to reduce the size in a get using the parameters
  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population')    
  }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/name/${ term }`;

    //pipe = rxjs
    return this.http.get<Country[]>( url, { 
      params: this.httpParams 
    
    } )
      // .pipe(
      //   catchError( err => of([]))
      // );

  }

  searchCapital( term: string): Observable<Country[]>{
    const url = `${ this.apiURL }/capital/${ term }`;

    return this.http.get<Country[]>( url, { params: this.httpParams })
  }

  getCountryByAlpha( id: any): Observable<Country>{
    const url = `${ this.apiURL }/alpha/${ id }`;

    return this.http.get<Country>( url )
  }

  searchRegion( region:string ): Observable<Country[]>{
    const url = `${ this.apiURL }/region/${ region }`;

  return this.http.get<Country[]>( url, { params: this.httpParams  } )
  }
}
