import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { SocialsComponent } from './components/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SitemapComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
