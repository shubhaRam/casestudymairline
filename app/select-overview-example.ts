import {Component} from '@angular/core';

export interface City {
  value: string;
  viewValue: string;
}

export interface Destination{
  value : string;
  viewValue :string ;
}

@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  cities: City[] = [
    {value: 'ban-0', viewValue: 'Bangalore'},
    {value: 'chen-1', viewValue: 'Chennai'},
    {value: 'delhi-2', viewValue: 'Delhi'},
    {value: 'bom-3', viewValue: 'Bombay'}

  ];
  dest :  Destination[] = [
    {value: 'ban-0', viewValue: 'Bangalore'},
    {value: 'chen-1', viewValue: 'Chennai'},
    {value: 'delhi-2', viewValue: 'Delhi'},
    {value: 'bom-3', viewValue: 'Bombay'}
  ];
}


