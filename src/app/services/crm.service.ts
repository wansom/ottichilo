import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private client = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  constructor() { 
 
  }
  getPosts(){
    return this.client.getEntries({
      content_type: environment.contentful.contentTypeIds.blogpost,
    })
    .then((entry) => {
      let posts = entry.items.map((item:any) => {
        const { title, date,description,  }:any = item.fields;
        const { id } = item.sys;
        const image:any = item.fields.image.fields.file.url;
        return { title,date, description, id, image };
      });
     return posts
    });
  }
  getImages(){
    return this.client.getEntries({
      content_type: "gallery",
    })
    .then((entry) => {
      let posts = entry.items.map((item:any) => {
        const { title,description,category  }:any = item.fields;
        const { id } = item.sys;
        const image:any = item.fields.image.fields.file.url;
        return { title, description, category,id, image };
      });
     return posts
    });
  }

}

