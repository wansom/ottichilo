import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { EpubComponent } from './epub/epub.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'manifesto',component:ManifestoComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'blog',component:BlogComponent},
  {path:"epub",component:EpubComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
