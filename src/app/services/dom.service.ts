import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(@Inject(DOCUMENT) private document: Document,private http: HttpClient) {}
  disableRightClick() {
    this.document.addEventListener('contextmenu', (event) =>
      event.preventDefault()
    );
  }
  fetchData(){
    return this.http.get("https://us-central1-scanpal-f74da.cloudfunctions.net/shara/auth");
  }


  
}
