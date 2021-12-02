import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { FormGuard } from './auth/form.guard';
import { PermissionGuard } from './auth/permission.guard';
import { HomeComponent } from './home/home.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { 
    path: 'admin', 
    component: WelcomeComponent, 
    canActivate: [AuthenticationGuard],
    children: [
      {path: 'add-user', component: AddUserComponent, canActivate:[PermissionGuard], canDeactivate:[FormGuard]},
      {path: 'add-product', component: AddProductComponent, canActivate:[PermissionGuard]},
    ]
  },
  { path: 'noPermission', component: NoPermissionComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
