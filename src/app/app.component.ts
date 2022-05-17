import { Component } from '@angular/core';
import { DomService } from './services/dom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ottichilo';
  constructor(private rightClickDisable: DomService) {}
  ngOnInit() {
    this.rightClickDisable.disableRightClick();
  }
}
