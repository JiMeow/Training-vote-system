import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateVoteComponent} from "./create-vote/create-vote.component";

const routes: Routes = [
  {path: '', component: HomeComponent},  // Default route
  {path: 'home', component: HomeComponent},
  {path: 'create-vote', component: CreateVoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
