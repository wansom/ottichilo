import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(@Inject(DOCUMENT) private document: Document) {}
  disableRightClick() {
    this.document.addEventListener('contextmenu', (event) =>
      event.preventDefault()
    );
  }
  
}
