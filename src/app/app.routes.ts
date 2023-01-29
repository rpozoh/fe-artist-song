import { Routes } from '@angular/router';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES : Routes = [
    { path : 'home', component : HomeComponent },
    { path : 'artist/:artistName', component : ArtistInfoComponent },
    { path : '', pathMatch : 'full', redirectTo : 'home' },
    { path : '**', pathMatch : 'full', redirectTo : 'home' },
];