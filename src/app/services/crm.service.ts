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
      console.log("entry",entry.items)
      let posts = entry.items.map((item:any) => {
        const { title, date,description,categories  }:any = item.fields;
        const { id } = item.sys;
        const image:any = item.fields.image.fields.file.url;
        return { title,date, description,categories, id, image };
      });
     return posts
    });
  }
  getImages(){
    return this.client.getEntries({
      content_type: "pictures",
    })
    .then((entry) => {
      let posts = entry.items.map((item:any) => {
        const { title,description,category,date  }:any = item.fields;
        const { id } = item.sys;
        const image:any = item.fields.image.fields.file.url;
        return { title, description, category,date,id, image };
      });
     return posts
    });
  }

}

