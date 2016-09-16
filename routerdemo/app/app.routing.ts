import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/pages/home.component';
import { AboutComponent }      from './components/pages/about.component';
import { ReadmoreComponent} from './components/pages/readmore.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'more',
    component:ReadmoreComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);