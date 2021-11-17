import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Donuts } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute, private service:DonutService) { }
donut:Donut = {}as Donut;
  ngOnInit(): void {
    const routParams = this.router.snapshot.paramMap;
    let id:number = Number(routParams.get("id"));
    this.service.getDonutById(id).subscribe((response:Donut) => this.donut = response);
  }

}
