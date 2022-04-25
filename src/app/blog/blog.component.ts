import { Component, OnInit } from '@angular/core';
import { CrmService } from '../services/crm.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private posts: Entry<any>[] = [];

  constructor(private service:CrmService) { }

  ngOnInit(): void {
    this.service.getPosts().then((posts:any)=>{
      posts.forEach((element:any) => {
        console.log(element.fields)
      });
    })
  }

}
