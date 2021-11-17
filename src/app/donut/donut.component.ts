import { Component, OnInit } from '@angular/core';
import { Donuts, Result } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
donuts:Result[] = [];
  constructor(private donutService:DonutService) { }

  ngOnInit():void { this.donutService.getAll().subscribe((response:Donuts)=>{
    this.donuts=response.results;
    console.log(this.donuts);
  })
    
  }

  


}



