import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devs } from './devs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevsService {
apiURL:string = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http:HttpClient) { }
  getAllDevs():any{
    return this.http.get(this.apiURL);
}

}
