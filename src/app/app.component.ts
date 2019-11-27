import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cat } from './cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catDemo';
  cats: Cat[] = [];
  cat: Cat;
  constructor(private http: HttpClient ) {
  }

  public giveMeCat() {
    const url = 'https://api.thecatapi.com/v1/images/search';

    this.http.get(url).subscribe((catResponse: HttpResponse<any>)=>{
      console.log(catResponse);
      this.cat = {
        url: catResponse[0].url
      }
      this.cats.push(this.cat);
      console.log(this.cats);
    })
  }
}
