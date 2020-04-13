import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[]; 
  
  constructor() { }

  ngOnInit() {
   
  }
  count(search: string, satellites: Satellite[]): number {
    let countSatellites: Satellite[] = [];
    for(let i=0; i < satellites.length; i++){
      let type = satellites[i].type.toLowerCase();
      if(type == search){
        countSatellites.push(satellites[i]);
      }
      
    }
    return countSatellites.length;
    }
}
