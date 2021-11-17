import { Component, OnInit } from '@angular/core';
import { Devs, Complete } from '../devs';
import { DevsService } from '../devs.service';
@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {
devsList:Complete[] = [];

  constructor(private devsService:DevsService) { }

  ngOnInit():void { this.devsService.getAllDevs().subscribe((response:Devs)=>{
    this.devsList = response.complete;
   
  })
    
  }


}
