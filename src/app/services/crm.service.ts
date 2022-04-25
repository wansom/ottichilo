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
  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.blogpost
    }, query))
    .then(res => res.items);
  }

}
