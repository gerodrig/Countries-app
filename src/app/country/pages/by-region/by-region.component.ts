import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent  {

  regions: string []  = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  country: Country[] = [];

  constructor(private countryService: CountryService) { }

  getCssClass( region: string ){
    return this.activeRegion === region ? 'btn-primary' : 'btn-outline-primary';
  }

activateRegion( region: string ){
if ( region === this.activeRegion ) { return; }

  this.activeRegion = region;
  this.country = [];

  
  this.countryService.searchRegion( region ).subscribe( res =>{
    this.country =  res;
  });
}

}
