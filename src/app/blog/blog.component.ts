import { Component, OnInit } from '@angular/core';
import { CrmService } from '../services/crm.service';
import { Entry } from 'contentful';

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
      posts.forEach((element:any) => {
       
        this.posts.push(element.fields)

      });
      console.log(this.posts)
    })
  }

}
