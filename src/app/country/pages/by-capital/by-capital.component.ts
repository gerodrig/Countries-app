import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term:string = '';
  isError: boolean = false;
  country: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ){
    this.term = term;
    
    this.countryService.searchCapital ( this.term )
      .subscribe( (res) => {
        console.log( res );
        this.country = res;
        


      }, (err) => {
        this.isError = true;
        this.country = [];
      }
      );
  }


}
