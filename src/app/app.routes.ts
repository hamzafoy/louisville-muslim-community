import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunityMapComponent } from './community-map/community-map.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { MasaajidComponent } from './masaajid/masaajid.component';
import { SchoolsComponent } from './schools/schools.component';
import { IslamComponent } from './islam/islam.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'news', component: NewsComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'map', component: CommunityMapComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'masaajid', component: MasaajidComponent},
    {path: 'schools', component: SchoolsComponent},
    {path: 'islam', component: IslamComponent},
];