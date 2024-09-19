import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";

export const ADMIN_ROUTES: Routes = [ 
   {
      path:'', 
      component:AdminLayoutComponent,
      children:[
         {path:'',component:DashboardComponent},
         {path:'calendar',component:DashboardComponent},

      ]
   }
]