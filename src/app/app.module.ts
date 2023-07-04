import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileLinkComponent } from './components/mobile-link/mobile-link.component';
import { LinkComponent } from './components/link/link.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MobileLinkComponent,
    LinkComponent,
    NewsCardComponent,
    NoticiasComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
