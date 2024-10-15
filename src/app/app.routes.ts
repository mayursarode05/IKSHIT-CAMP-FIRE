import { Routes } from '@angular/router';
import { IndexComponent } from './shared/components/index/index.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component:IndexComponent },
    { path: 'contactUs', component:ContactUsComponent },
    { path: 'aboutUs', component:AboutUsComponent },
    { path: "**", component: PageNotFoundComponent, pathMatch: 'full' }
];
