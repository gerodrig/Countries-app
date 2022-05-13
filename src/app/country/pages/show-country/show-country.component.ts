import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  country!: Country;

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe( ( id ) => {
    //     console.log( id );

    //     this.countryService.getCountryByAlpha( id )  
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   });

    //using RxJS

      this.activatedRoute.params
        .pipe(
          switchMap( ( { id } ) => this.countryService.getCountryByAlpha( id )), 
          tap( console.log )
        )
          .subscribe( res => this.country = res );


  }

}
