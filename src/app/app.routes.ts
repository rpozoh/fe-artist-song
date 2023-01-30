import { Routes } from '@angular/router';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES : Routes = [
    { path : 'home', component : HomeComponent },
    { path : 'artist/:artistName', component : ArtistInfoComponent },
    { path : 'favorite', component : FavoritesComponent},
    { path : '', pathMatch : 'full', redirectTo : 'home' },
    { path : '**', pathMatch : 'full', redirectTo : 'home' },
];