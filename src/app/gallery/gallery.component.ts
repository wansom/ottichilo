import { Component, OnInit } from '@angular/core';
import { CrmService } from '../services/crm.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private crm:CrmService) { }

  public agriculture:any =[]
  public education:any = []
  public environment:any =[]
  public transport:any =[]
  public trade:any = []
  public healthcare:any = []
  public water:any =[]
  public images:any[] =[]

  ngOnInit(): void {
    this.crm.getImages().then((data:any)=>{
      this.images = data
      
      this.healthcare =data.sort((a:any,b:any) =>  b.date - a.date);

      console.log(data)
    })
  
  }
  filterImages(target:any){
    if(target.value =="all"){
      this.crm.getImages().then((data)=>{
        this.images = data
        this.healthcare =data
  
        console.log(data)
      })
    }
    this.healthcare = this.images.filter((e)=>e.category ==target.value)
    console.log(this.healthcare)
  }

}
