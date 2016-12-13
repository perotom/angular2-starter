import { Component } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {Profile} from "./model/Profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public people: Profile[];

  constructor(private http: Http) {
    this.http.get('/people')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.people = data},
        err => console.error(err),
        () => console.log('done')
      );
  }

}
