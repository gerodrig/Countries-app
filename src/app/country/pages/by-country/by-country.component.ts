import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
  li {
    cursor: pointer;
  }
  `
  ]
})
export class ByCountryComponent {

  term:string = '';
  isError: boolean = false;
  country: Country[] = [];
  suggestedCountry: Country[] = [];
  showSuggestions: boolean =  false;

  constructor( private countryService: CountryService  ) { }

  search( term: string ){
    this.isError = false;
    this.term = term;
    this.showSuggestions = false;
    
    this.countryService.searchCountry ( this.term )
      .subscribe( (res) => {
        console.log( res );
        this.country = res;
        


      }, (err) => {
        console.log('Error');
        console.info( err );
        this.isError = true;
        this.country = [];
      }
      );
  }

  suggestions( term: string ){
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;
    

    this.countryService.searchCountry( term )
      .subscribe( 
        country => this.suggestedCountry = country.splice(0,5),
        ( err ) => this.suggestedCountry = []
        );
  }

  suggested(term: string){
    this.search( term );
  }
}
