import { Routes } from "@angular/router";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { ArticlesDetailComponent } from "./articles-detail/articles-detail.component";


export const ARTICLES_ROUTES: Routes = [
   { path:'',component:ArticlesListComponent },
   { path:':slug',component:ArticlesDetailComponent },
]
