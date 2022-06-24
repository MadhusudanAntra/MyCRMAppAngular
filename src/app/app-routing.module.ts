import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'region', loadChildren: () => import('./region/region.module').then(m=>m.RegionModule) },
  
  {path:'employee', loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule) },
  {path:'account', loadChildren:()=> import('./account/account.module').then(m=>m.AccountModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
