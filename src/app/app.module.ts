import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { CrmService } from './services/crm.service';
import { BannerComponent } from './banner/banner.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ManifestoComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    BlogComponent,
    BannerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule,HttpClientModule],
  providers: [CrmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
