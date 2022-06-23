import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.css'],
})
export class EpubComponent implements OnInit {
  public right: any = document.getElementsByClassName('right');
  public si = this.right.length;
  public z = 1;
  turnRight() {
    if (this.si >= 1) {
      this.si--;
    } else {
      this.si = this.right.length - 1;
      const sttmot = (i: any) => {
        setTimeout(() => {
          this.right[i].style.zIndex = 'auto';
        }, 300);
      };
      for (var i = 0; i < this.right.length; i++) {
        this.right[i].className = 'right';
        sttmot(i);
        this.z = 1;
      }
    }
    this.right[this.si].classList.add('flip');
    this.z++;
    this.right[this.si].style.zIndex = this.z;
  }
  turnLeft() {
    if (this.si < this.right.length) {
      this.si++;
    } else {
      this.si = 1;
      for (var i = this.right.length - 1; i > 0; i--) {
        this.right[i].classList.add('flip');
        this.right[i].style.zIndex = this.right.length + 1 - i;
      }
    }
    this.right[this.si - 1].className = 'right';
    setTimeout(() => {
      this.right[this.si - 1].style.zIndex = 'auto';
    }, 350);
  }
  onSuc(e:any){
    console.log(e)
  }
  onErr(e:any){
    console.log(e)
  }
  constructor() {}

  ngOnInit(): void {}
}
