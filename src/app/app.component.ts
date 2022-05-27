
import { Component } from '@angular/core';
import { DomService } from './services/dom.service';
import {Router, NavigationEnd} from "@angular/router";


declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ottichilo';
  constructor(private rightClickDisable: DomService, private router:Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'UA-229327585-1', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    }
 )}
  
  ngOnInit() {
    //this.rightClickDisable.disableRightClick();
    this.rightClickDisable.fetchData().subscribe((data:any)=>{
      console.log(data.data)
    }
    )

  }

}
