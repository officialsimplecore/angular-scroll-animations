import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimateOnScrollComponent} from "./animate-on-scroll.component";
import {ScrollToSectionComponent} from "./scroll-to-section.component";

const routes: Routes = [
  { path: '', redirectTo: '/animate-scroll', pathMatch: 'full'},
  { path: 'animate-scroll', component: AnimateOnScrollComponent},
  { path: 'scroll-to-section', component: ScrollToSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
