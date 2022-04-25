import { Component, OnInit } from '@angular/core';
import { CrmService } from '../services/crm.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public posts: any[] = [];

  constructor(private service:CrmService) { }

  ngOnInit(): void {
    this.service.getPosts().then((posts:any)=>{
      console.log(posts)
      this.posts = posts

    })
  }

}
// .then((entry) => {
//   let cars = entry.items.map((item) => {
//     const { name, price, seats, doors } = item.fields;
//     const { id } = item.sys;
//     const image = item.fields.image.fields.file.url;
//     return { name, price, id, image, seats, doors };
//   });
//   commit('setCars', cars)
// });