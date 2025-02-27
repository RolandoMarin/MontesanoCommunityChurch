import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'location',component:LocationComponent },
  {path: 'events',component:EventsComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactFormComponent},
  {path: '**',component: ErrorHandler}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
