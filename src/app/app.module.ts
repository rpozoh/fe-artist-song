import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Servicios
import { SongService } from './services/songs.service';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GetSongsComponent } from './components/get-songs/get-songs.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { SongInfoComponent } from './components/song-info/song-info.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    GetSongsComponent,
    ArtistInfoComponent,
    SongInfoComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( APP_ROUTES,{ useHash : true } )
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
